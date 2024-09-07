import { ArrayStateInterface } from "@/definitions/hookTypes";

import { motion } from "framer-motion";

interface ArrayVisualizationProps {
  array: number[];
  isSorting: boolean;
  hoveredIndex: number | null;
  setState: React.Dispatch<React.SetStateAction<ArrayStateInterface>>;
}

export default function ArrayVisualization({
  array,
  isSorting,
  hoveredIndex,
  setState,
}: ArrayVisualizationProps) {
  return (
    <div className="flex flex-row gap-1 items-end h-24">
      {array.map((value, idx) => (
        <motion.div
          key={idx}
          initial={{ height: value * 1.5 }}
          animate={{ height: value * 1.5 }}
          transition={{ duration: 0.3 }}
          whileHover={{ backgroundColor: "orange" }}
          style={{
            height: `${value * 1.5}px`,
            width: 25,
            backgroundColor: `${isSorting ? "#FF0000" : "blue"}`,
            position: "relative",
          }}
          onMouseEnter={() =>
            setState(prev => ({ ...prev, hoveredIndex: idx }))
          }
          onMouseLeave={() =>
            setState(prev => ({ ...prev, hoveredIndex: null }))
          }
        >
          {hoveredIndex === idx && (
            <div
              style={{
                position: "absolute",
                top: "-30px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "4px",
                backgroundColor: "orange",
                color: "black",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              {value}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
