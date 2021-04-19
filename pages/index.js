import Head from "next/head";
import { ToastContainer } from "react-toastify";

import Board from "../components/Board";
import { useIdeas } from "../hooks/useIdeas";

export default function Home() {
  const [ideas, create, save, sort, deleteIdea] = useIdeas();

  return (
    <div>
      <Head>
        <title>BCG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />

      <div className="container">
        <div className="toolbar">
          <div className="field">
            <label>Sort:</label>
            <div className="select">
              <select onChange={e => sort(e.target.value)}>
                <option value="">Select option...</option>
                <option value="title">Title</option>
                <option value="created_date">Created Date</option>
              </select>
              <span className="focus"></span>
            </div>
          </div>
          <button onClick={() => create()}>New Idea</button>
        </div>

        <div className="tiles-container">
          {ideas || ideas.length === 0 && <div>No Idea</div>)}

          {ideas?.length > 0 &&
            ideas.map(idea => (
              <Board
                key={idea.id}
                data={idea}
                onSave={save}
                onDelete={deleteIdea}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
