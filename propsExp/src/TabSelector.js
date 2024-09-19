// Exercise 8: Tab Selector
// Objective: Implement a component with three tabs that show different content when selected.
// * Initial State: The id of the active tab (e.g., "tab1")
// * UI Elements: Three tabs (e.g., "Tab 1", "Tab 2", "Tab 3") and a content area.
// * Interaction: Clicking a tab updates the active tab state and changes the content displayed accordingly.


import React, { useState } from "react";

function TabSelector() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div>
        <button
          onClick={() => handleTabClick("tab1")}
          style={{ fontWeight: activeTab === "tab1" ? "bold" : "normal" }}
        >
          Tab 1
        </button>
        <button
          onClick={() => handleTabClick("tab2")}
          style={{ fontWeight: activeTab === "tab2" ? "bold" : "normal" }}
        >
          Tab 2
        </button>
        <button
          onClick={() => handleTabClick("tab3")}
          style={{ fontWeight: activeTab === "tab3" ? "bold" : "normal" }}
        >
          Tab 3
        </button>
      </div>
      <div>
        {activeTab === "tab1" && <p>Content for Tab 1</p>}
        {activeTab === "tab2" && <p>Content for Tab 2</p>}
        {activeTab === "tab3" && <p>Content for Tab 3</p>}
      </div>
    </>
  );
}

export default TabSelector;


















// import React from "react";

// function TabSelector(){
//     let []
// return(
//     <>
//     </>
// )
// }
// export default TabSelector;