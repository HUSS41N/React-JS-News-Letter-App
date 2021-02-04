import React from "react"
import SearchBar from "./SearchBar"
import News from "../api/News"
class App extends React.Component{
    state = { news:[] }
    componentDidMount(){
        this.onSearchSubmit('India')
    }
    onSearchSubmit  = async (term) => {
        const response = await News.get(`/everything?q=${term}&from=2021-02-03&to=2021-02-03&sortBy=popularity&apiKey=e18fe1589b984326b6c2f61e427adec2`,{
        })
        this.setState({news:response.data.articles})
        console.log(this.state.news);
    }
    render(){
        return (<div>
            <SearchBar onSearchSubmit={this.onSearchSubmit}/>
            </div>
            )
    }
}
export default App