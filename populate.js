db = connect("localdev.scup.com/movies");
mv1 = {name:"Filme1",codigo:"Codigo1"}
mv2 = {name:"Filme2",codigo:"Codigo2"}
mv3 = {name:"Filme3",codigo:"Codigo3"}
mv4 = {name:"Filme4",codigo:"Codigo4"}
mv5 = {name:"Filme5",codigo:"Codigo5"}
mv6 = {name:"Filme6",codigo:"Codigo6"}

db.movies.insert(mv1);