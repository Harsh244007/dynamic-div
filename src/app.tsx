import { memo, useState } from "preact/compat";

const App = () => {
  const [divItems, setDivItems] = useState([
    { id: 0, name: "first", color: "red", childItem: "hi from first", isChild: false },
    { id: 1, name: "second", color: "blue", childItem: "hi from second", isChild: false },
    { id: 2, name: "third", color: "green", childItem: "hi from third", isChild: false },
  ]);
  // @ts-ignore
  const [expanded, setExpanded] = useState({ id: null, value: false });

  const handleClickDiv = (index:number) => {
    const updatedItems = divItems.filter((_, i) => i !== index);
    const selectedItem = divItems[index];
    
  // @ts-ignore
    setExpanded({ id: 0, value: index === expanded.id ? !expanded.value : true });
    setDivItems(() => [selectedItem, ...updatedItems]);
  };

  return (
    <div className={`flex flex-wrap justify-center items-center ${expanded.value && "uniqueGrid"} ${expanded.id == null && "noshrink"} gap-5 w-full `}>
      {divItems.map((divItem, index) => (
        <div key={divItem.id} className={`border bg-${divItem.color}-500 cursor-pointer`} onClick={() => handleClickDiv(index)}>
          <p>{divItem.name}</p>
          {index === expanded.id && expanded.value && <p>{divItem.childItem}</p>}
        </div>
      ))}
    </div>
  );
};

export default memo(App);
