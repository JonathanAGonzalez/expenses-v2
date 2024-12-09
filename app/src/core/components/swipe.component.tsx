"use client";
import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SwipeItemProps {
  content: string | ReactNode;
  onEdit: () => void;
  onDelete: () => void;
}

const SwipeItem: React.FC<SwipeItemProps> = ({ content, onEdit, onDelete }) => {
  const [action, setAction] = useState<"edit" | "delete" | null>(null);

  const handleDrag = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x > 50) {
      setAction("edit");
    } else if (info.offset.x < -50) {
      setAction("delete");
    } else {
      setAction(null);
    }
  };

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x > 100) {
      onEdit();
    } else if (info.offset.x < -100) {
      onDelete();
    }
    setAction(null); // Reset action
  };

  return (
    <div className="relative w-full max-w-md overflow-hidden">
      {/* Background actions */}
      <AnimatePresence>
        {action === "edit" && (
          <motion.div
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-start bg-blue-500 px-4 text-white font-bold bg-[#79aee7] rounded-2xl"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            Editar
          </motion.div>
        )}
        {action === "delete" && (
          <motion.div
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-[#f37979] rounded-2xl flex items-center justify-end bg-red-500 px-4 text-white font-bold"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            Borrar
          </motion.div>
        )}
      </AnimatePresence>

      {/* Swipeable item */}
      <motion.div
        className="relative z-10 bg-white shadow-md rounded-lg cursor-grab"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        whileTap={{ scale: 0.95 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        {content}
      </motion.div>
    </div>
  );
};

// Ejemplo de uso
export const SwipeElement = ({ content }: { content: ReactNode }) => {
  const handleEdit = () => alert("Editar acción activada!");
  const handleDelete = () => alert("Borrar acción activada!");

  return (
    <SwipeItem content={content} onDelete={handleDelete} onEdit={handleEdit} />
  );
};
