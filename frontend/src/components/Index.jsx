import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="mt-32 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-8 text-center">
        <Link to="/board" className="inline-block">
          <span className="text-green-600 cursor-pointer">Простая Kanban доска </span>
        </Link>
        <Link to="/board">
          <img src="/img/kanban.png" className="kanban-image-margin"/>
        </Link>
      </h1>
    </div>
  );
}

export default Index;
