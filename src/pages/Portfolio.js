import React, {useState} from "react";
import SearchBar from "../components/SearchBar";
import PortfolioCard from "../components/PortfolioCard";
import {filterItems} from "../utils/helpers";

const data = [
  {title:"App1"},
  {title:"Shop"},
  {title:"AI"}
];

const Portfolio = () => {

  const [term,setTerm] = useState("");

  const filtered = filterItems(data,term);

  return (
    <>
      <SearchBar set={setTerm}/>
      <div className="grid">
        {filtered.map((d,i)=>(
          <PortfolioCard key={i} title={d.title}/>
        ))}
      </div>
    </>
  );
};

export default Portfolio;