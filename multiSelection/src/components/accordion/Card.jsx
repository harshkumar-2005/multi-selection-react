import { useState } from "react";
import data from "./data.js";

function Card() {
  const [selectedId, setSelectedId] = useState(null);

  const handleToggle = (id) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-96 bg-gray-200 rounded-md p-4 space-y-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded cursor-pointer"
            onClick={() => handleToggle(item.id)}
          >
            {/* Question */}
            <div className="p-3 font-semibold">{item.question}</div>

            {/* Answer */}
            {selectedId === item.id && (
              <div className="px-3 pb-3 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
