var app = new Vue({
  el: '#app',
  data: {
    query: '',
    places: [],
    loading: false
  },
  methods: {
    search: function(e){
      this.places = []
      this.loading = true
      let that = this;
      if(this.query.length<=0) return;
      $.get("/places/" + this.query, function(result){
        if(result.error)
          Materialize.toast(result.error.description, 2000)
        else
          that.places = result.businesses
        that.loading = false
      })
    },
    getCategories: function(cat){
      return cat.reduce((a, c)=>{
        return a.length> 0 ? a + ", " + c.title : c.title
      }, "")
    },
    getRating: function(rating){
      return rating? rating: 0 
    }
  }
})