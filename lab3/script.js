const searchInfo = {
    quiries: [],
    limit: 5,
    addQuery: function(query) {
      if (this.quiries.length >= this.limit) {
        var oldestQuery = this.quiries.shift(); // to delete the oldest query.
        console.log("Oldest search query has been deleted: ", oldestQuery);
      }
      this.quiries.push(query);
    }
  }
  
  function validateSearchForm() {
    // Access the textbox using its id instead of the name
    let x = document.getElementById("searchText").value;
    
    if (x == "") {
      alert("The search query has to be filled out!");
      return false;
    } else {
      searchInfo.addQuery(x);
      console.log("Recent searches: ", searchInfo.quiries);
      return true;
    }
  }
  