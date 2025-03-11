import React from "react";

function StickySearch({ className }: StickySearchProps) {
  return (
    <div className={`  ${className} `}>
    <SearchWithGemini />
  </div>
  );
}

interface StickySearchProps {
  className?: string;
}

function SearchWithGemini() {
  return (
    <fieldset className="border border-red-500 rounded-lg p-4 mt-4">
      <legend>Search with gemini</legend>
      <div className="flex border rounded-full p-2 shadow-md mt-4 max-w-md mx-auto   border-pink-200">
        <input
          type="text"
          placeholder="e.g I want nike shoes for rent or buy under 30$"
          className="w-full outline-none px-4 "
        />
      </div>
    </fieldset>
  );
}

export default StickySearch;
