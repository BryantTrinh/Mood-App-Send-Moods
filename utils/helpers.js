// Finished

module.exports = {
  format_date: date => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
  format_content: content => {
    return content.split("<br>").join("\n")
  }
};