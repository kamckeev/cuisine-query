function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel
  var url =`/metadata/${sample}`
  var paneldiv=d3.select('#sample-metadata')
  paneldiv.html("")
  var tbody=paneldiv.append('tbody')
  d3.json(url).then(function(data){
    Object.entries(data).forEach(([key,value])=>{
      var row=tbody.append('tr')
      row.append('td').text(`${key}: ${value}`)
    })