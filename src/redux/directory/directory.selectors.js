import { createSelector } from "reselect";

const directory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [directory],
  (directory) => directory.sections
);
