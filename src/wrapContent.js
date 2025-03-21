export const wrapContent = ({ title, content }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    <link rel="icon" href="data:image/x-icon;base64,AA" />
  </head>
  <body><div id="root">${content}</div></body>
</html>
`;
