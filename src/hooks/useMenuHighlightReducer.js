import { useReducer } from 'react';

const initialState = { index: -1 };

export default function useMenuHighlightReducer(items) {
  const [highlight, dispatch] = useReducer(
    highlightReducer,
    initialState,
  );
  const highlightedItem = items[highlight.index];

  function highlightReducer(state, action) {
    switch (action.type) {
      case 'reset':
        return { index: -1 };
      case 'highlight':
        return { index: action.payload };
      case 'increment':
      if (state.index < 0) {
          return { index: 0};
        }
        return { index: Math.min(state.index + 1, items.length - 1) };
      case 'decrement':
        if (state.index < 0) {
          return { index: 0 };
        }
        return { index: Math.max(state.index - 1, 0) };
      default: {
        return state
      }
    }
  }

  return {
    highlightedItem, dispatch, highlightedIndex: highlight.index
  }
}
