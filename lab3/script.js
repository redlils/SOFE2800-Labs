const searchInfo = {
    queries: [],
    limit: 5,
    addQuery: function(query) {
      if (this.queries.length >= this.limit) {
        var oldestQuery = this.queries.shift(); 
        console.log("Oldest search query has been deleted: ", oldestQuery);
      }
      this.queries.push(query);
    }
  }
  
  function validateSearchForm() {
    let x = document.getElementById("searchText").value;

    if (x == "") {
      alert("The search query has to be filled out!");
      return false;
    } else {
      searchInfo.addQuery(x);
      console.log("Recent searches: ", searchInfo.queries);
      return true;
    }
  }
  