import { SetStateAction, useState } from "react";

import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  const [text, setText] = useState<string>("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && text.trim() !== "") {
      e.preventDefault();
      setSearchTerm(text);
      setText("");
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        mt: 3,
        padding: "6px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        background: "#161D2F",
        borderRadius: 2,
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon sx={{ color: "white", fontSize: "25px" }} />
      </IconButton>
      <InputBase
        placeholder="Search for movies and tv shows..."
        sx={{
          color: "#aaa",
          ml: 1,
          flex: 1,
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleSearch}
      />
    </Paper>
  );
};
export default SearchBar;
