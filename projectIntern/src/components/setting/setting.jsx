import Sidebar from "../sidebar/sidebar";

import Listsetting from "./setting_list";
import Header from "./header";
import Setting_edit from "./setting_edit";
import React, { useState } from "react";

export default function EditSetting() {
  const [activeTab, setActiveTab] = useState("รายการ");
  return (
    <div className="flex h-screen p-4">
      <Sidebar />

      <main className="flex-grow p-0 rounded-md shadow-lg bg-[#F5F6FB]">
        <div className="p-0 ">
          {/* Header */}
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Content Section */}
          {activeTab === "รายการ" ? <Listsetting /> : <Setting_edit />}
        </div>
      </main>
    </div>
  );
}
