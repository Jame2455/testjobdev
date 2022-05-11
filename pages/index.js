
import ListRestaurent from "../components/ListRestaurent";
import Nav from "../components/nav";
import Search from "../components/search";
import Tap from "../components/Tap";
import Top from "../components/Top";
export default function Home() {
  return (
    <div className=" inline-block">
      <Top/>
      <Tap/>
      <Search/>
      <ListRestaurent/>
      <Nav/>
      
    </div>
  );
}
