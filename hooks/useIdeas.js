import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const useIdeas = () => {
  const [ideas, setIdeas] = useState(null);

  const getIdeas = () => {
    const ideas = localStorage.getItem("ideas");
    if (ideas) {
      setIdeas(JSON.parse(ideas));
    }
  };

  const createNewIdea = () => {
    const id = localStorage.getItem("idCounter");
    const data = ideas ? [...ideas] : [];

    localStorage.setItem("idCounter", Number(id) + 1 || "1");
    setIdeas([
      ...data,
      {
        id: Number(id) + 1 || "1",
        body: "",
        title: "",
        created_date: new Date()
      }
    ]);
  };

  const saveIdea = payload => {
    const ideaIdx = ideas.findIndex(idea => idea.id === payload.id);

    if (ideaIdx > -1) {
      const ideasCopy = [...ideas];

      ideasCopy.splice(ideaIdx, 1, payload);
      setIdeas(ideasCopy);
      localStorage.setItem("ideas", JSON.stringify(ideasCopy));
      toast.success("Successfully updated a new idea");
    }
  };

  const sortIdea = type => {
    const ideasCopy = [...ideas];
    ideasCopy.sort((a, b) =>
      a[type] > b[type] ? 1 : b[type] > a[type] ? -1 : 0
    );
    setIdeas(ideasCopy);
  };

  const deleteIdea = id => {
    const ideaIdx = ideas.findIndex(idea => idea.id === id);

    if (ideaIdx > -1) {
      const ideasCopy = [...ideas];

      ideasCopy.splice(ideaIdx, 1);
      setIdeas(ideasCopy);
      localStorage.setItem("ideas", JSON.stringify(ideasCopy));
      toast.success("Successfully delete an idea");
    }
  };

  useEffect(() => {
    getIdeas();
  }, []);

  return [ideas, createNewIdea, saveIdea, sortIdea, deleteIdea];
};
