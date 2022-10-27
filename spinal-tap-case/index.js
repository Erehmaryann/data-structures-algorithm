// soln
const spinalCase = (string) => {
  string = string
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  return string;
};

spinalCase("This Is Spinal Tap"); //this-is-spinal-tap
