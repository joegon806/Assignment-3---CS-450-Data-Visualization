import React, { Component } from "react";
import "./App.css";
import * as d3 from "d3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordFrequency: []
    };
  }
  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  getWordFrequency = (text) => {
    const stopWords = new Set(["the", "and", "a", "an", "in", "on", "at", "for", "with", "about", "as", "by", "to", "of", "from", "that", "which", "who", "whom", "this", "these", "those", "it", "its", "they", "their", "them", "we", "our", "ours", "you", "your", "yours", "he", "him", "his", "she", "her", "hers", "it", "its", "we", "us", "our", "ours", "they", "them", "theirs", "I", "me", "my", "myself", "you", "your", "yourself", "yourselves", "was", "were", "is", "am", "are", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "as", "if", "each", "how", "which", "who", "whom", "what", "this", "these", "those", "that", "with", "without", "through", "over", "under", "above", "below", "between", "among", "during", "before", "after", "until", "while", "of", "for", "on", "off", "out", "in", "into", "by", "about", "against", "with", "amongst", "throughout", "despite", "towards", "upon", "isn't", "aren't", "wasn't", "weren't", "haven't", "hasn't", "hadn't", "doesn't", "didn't", "don't", "doesn't", "didn't", "won't", "wouldn't", "can't", "couldn't", "shouldn't", "mustn't", "needn't", "daren't", "hasn't", "haven't", "hadn't"]);
    const words = text.toLowerCase().replace(/[.,/#!$%^&*;:{}=_`~()]/g, "").replace(/\s+/g, " ").split(" ");
    const filteredWords = words.filter(word => !stopWords.has(word));
    return Object.entries(filteredWords.reduce((freq, word) => {
      if (word)
        freq[word] = (freq[word] || 0) + 1;
      return freq;
    }, {}));
  }

  renderChart() {
    //this calculates the 5 most frequent words
    const data = this.state.wordFrequency.sort((a, b) => b[1] - a[1]).slice(0, 5)

    // create a dictionary of word : [rank, frequency]
    const data_dict = Object.assign({}, ...data.map((word_freq, rank) => ({ [word_freq[0]]: [rank, word_freq[1]] })))
    const words = Object.keys(data_dict);

    var fontSize = d3.scaleLinear()
      .domain([0, 10]) //input frequency
      .range([5, 50]) //output font size

    d3.select("svg").selectAll("text").data(words, word => word)
      .join(
        enter => enter.append("text")
          .text((word) => word)
          .attr("y", 85)

          //change position
          .attr("x", (word, rank) => 5 + (rank * 120))
          .attr("font-size", 0)
          .transition()
          .duration(3000)
          //change size based on frequency
          .attr("font-size", (word) => fontSize(data_dict[word][1])),

        update => update
          .text((word) => word)
          .transition()
          .duration(3000)
          .attr("x", (word, rank) => 5 + (rank * 120))
          .attr("font-size", (word) => fontSize(data_dict[word][1])),
      )
  }

  render() {
    return (
      <div className="parent">
        <div className="child1" style={{ width: 1000 }}>
          <textarea type="text" id="input_field" style={{ height: 150, width: 1000 }} />
          <button type="submit" value="Generate Matrix" style={{ marginTop: 10, height: 40, width: 1000 }} onClick={() => {
            var input_data = document.getElementById("input_field").value
            this.setState({ wordFrequency: this.getWordFrequency(input_data) })
          }}
          > Generate WordCloud</button>
        </div>
        <div className="child2" ><svg className="svg_parent" style={{ width: 1000 }}>
          <text></text>
          <text></text>
          <text></text>
          <text></text>
          <text></text>
        </svg></div>
      </div>
    );
  }
}

export default App;