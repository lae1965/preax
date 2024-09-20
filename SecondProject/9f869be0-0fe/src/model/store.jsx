import { NotesProvider } from "./slices/Notes";

export function Context({ children }) {
  return <NotesProvider>{children}</NotesProvider>;
}
