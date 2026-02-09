export const filterItems=(items,term)=>{
 return items.filter(i=>i.title.toLowerCase().includes(term.toLowerCase()));
};