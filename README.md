# React Counter Demo

This project demonstrates a simple React counter application. The application is built using React and ReactDOM, with JSX syntax enabled via Babel.

## Features

- A counter that increments when the button is clicked.
- Built using React functional components and hooks (`useState`).

## File Structure

- **index.html**: Contains the HTML structure, inline CSS, and the React component script.

## How to Run

1. Open the `index.html` file in any modern web browser.
2. The application will render a counter with a button.
3. Click the button to increment the counter.

## Dependencies

The project uses the following CDNs:
- React: `https://unpkg.com/react@18/umd/react.development.js`
- ReactDOM: `https://unpkg.com/react-dom@18/umd/react-dom.development.js`
- Babel: `https://unpkg.com/@babel/standalone/babel.min.js`

## Customization

You can modify the `Counter` component inside the `<script type="text/babel">` tag in `index.html` to add more functionality or style.

## License

This project is open-source and free to use.

## Deployment Purging

### Purpose

The `purge-deployments.sh` script is designed to help you clean up and remove deployment-related files, directories, and configurations from your system.

### How to Use

1. Open a terminal.
2. Navigate to the directory where the `purge-deployments.sh` script is located.
3. Run the script using the following command:
   ```bash
   ./purge-deployments.sh
   ```
4. The script will delete deployment-related files, remove deployment-related directories, and clean up deployment-related configurations.

### Important Notes

- Ensure you have the necessary permissions to delete files and directories.
- Double-check the paths and configurations in the script before running it to avoid accidental data loss.
