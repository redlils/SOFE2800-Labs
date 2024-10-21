const searchInfo = {
    quiries: [],
    limit: 5,
    addQuery: function(query) {
      if (this.quiries.length >= this.limit) {
        var oldestQuery = this.quiries.shift(); 
        console.log("Oldest search query has been deleted: ", oldestQuery);
      }
      this.quiries.push(query);
    }
  }
  
  function validateSearchForm() {
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
  