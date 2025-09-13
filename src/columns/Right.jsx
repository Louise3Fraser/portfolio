import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ProjectIndex from "../components/ProjectIndex";
import ProjectDetail from "../components/ProjectDetail";

function RightColumn({ scrollHostRef }) {
  const location = useLocation();
  useEffect(() => {
    if (scrollHostRef?.current) scrollHostRef.current.scrollTop = 0;
  }, [location.pathname, scrollHostRef]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/projects" replace />} />
      <Route path="/projects" element={<ProjectIndex />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/projects/c/:category" element={<ProjectIndex />} />
      <Route path="*" element={<Navigate to="/projects" replace />} />
    </Routes>
  );
}

export default RightColumn;
