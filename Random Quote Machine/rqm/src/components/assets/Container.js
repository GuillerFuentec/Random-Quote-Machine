import { useEffect, useState } from "react";
import "../../assets/Container.css";
import { asyncQuoteRequest } from "../../utils/async";

export default function Container() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    asyncQuoteRequest(setQuote);
  }, []);

  return (
    <div className="card cont">
      <div className="card-body">
        <p className="card-text" id="text">
          {quote[1]}
        </p>
        <h6
          id="author"
          className="author card-subtitle m-2 text-body-secondary"
        >
          {quote[0]}
        </h6>
        <div className="empty"></div>
        <a
          type="button"
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${quote[1]}%0A%0A-${quote[0]} `}
          target="_blank"
          className=" m-2 btn btn btn-primary float-start"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="16"
            fill="currentColor"
            className="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
          </svg>
        </a>
        <button
          onClick={() => asyncQuoteRequest(setQuote)}
          id="new-quote"
          type="button"
          className="m-2 btn btn-info float-end"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
