import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

const Table = ({ header, data }) => {
  // Memoize headers to prevent unnecessary re-renders
  const memoizedHeader = useMemo(() => header, [header]);

  // Helper function to render a table cell
  const renderCell = useCallback((col, row) => {
    const value = row[col.key];
    if (col.render) {
      return col.render(value, row);
    }
    return value !== null && value !== undefined ? value : "—";
  }, []);

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {memoizedHeader.map((col, index) => (
            <th
              key={col.key || index}
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f4f4f4",
                fontWeight: "bold",
              }}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {memoizedHeader.map((col, colIndex) => (
                <td
                  key={col.key || colIndex}
                  style={{ border: "1px solid #ddd", padding: "8px" }}
                >
                  {renderCell(col, row)}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={memoizedHeader.length}
              style={{
                textAlign: "center",
                padding: "16px",
                color: "#888",
              }}
            >
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  header: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      render: PropTypes.func, // Optional render function
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
