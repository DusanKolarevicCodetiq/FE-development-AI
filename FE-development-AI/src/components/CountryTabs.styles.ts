// import styled from "styled-components";

// // Main container styles
// export const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
//   width: 100%;

//   @media (max-width: 768px) {
//     padding: 16px;
//   }

//   @media (max-width: 480px) {
//     padding: 12px;
//   }
// `;

// // Tab styles
// export const TabsContainer = styled.div`
//   border-bottom: 2px solid #e2e8f0;
//   margin-bottom: 24px;
//   width: 100%;

//   @media (max-width: 768px) {
//     margin-bottom: 20px;
//   }

//   @media (max-width: 480px) {
//     margin-bottom: 16px;
//   }
// `;

// export const TabsList = styled.div`
//   display: flex;
//   gap: 8px;
//   role: tablist;
//   width: 100%;

//   @media (max-width: 480px) {
//     gap: 4px;
//   }
// `;

// export const TabButton = styled.button<{ isActive: boolean }>`
//   flex: 1;
//   max-width: 200px;
//   padding: 12px 24px;
//   border: none;
//   background: ${(props) => (props.isActive ? "#3b82f6" : "transparent")};
//   color: ${(props) => (props.isActive ? "white" : "#64748b")};
//   border-radius: 8px 8px 0 0;
//   cursor: pointer;
//   font-weight: 500;
//   font-size: 16px;
//   transition: all 0.2s ease;
//   text-align: center;

//   &:hover {
//     background: ${(props) => (props.isActive ? "#2563eb" : "#f1f5f9")};
//   }

//   &:focus {
//     outline: 2px solid #3b82f6;
//     outline-offset: 2px;
//   }

//   @media (max-width: 768px) {
//     padding: 10px 20px;
//     font-size: 15px;
//     max-width: none;
//   }

//   @media (max-width: 480px) {
//     padding: 8px 16px;
//     font-size: 14px;
//   }
// `;

// // Loading and error states
// export const LoadingContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 200px;
//   font-size: 18px;
//   color: #64748b;
//   text-align: center;

//   @media (max-width: 768px) {
//     height: 150px;
//     font-size: 16px;
//     padding: 0 20px;
//   }

//   @media (max-width: 480px) {
//     height: 120px;
//     font-size: 14px;
//     padding: 0 16px;
//   }
// `;

// export const ErrorContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 200px;
//   color: #dc2626;
//   font-size: 18px;
//   text-align: center;
//   padding: 0 20px;

//   @media (max-width: 768px) {
//     height: 150px;
//     font-size: 16px;
//   }

//   @media (max-width: 480px) {
//     height: 120px;
//     font-size: 14px;
//     padding: 0 16px;
//   }
// `;

// // Cards view styles
// export const CardsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 24px;
//   padding: 20px 0;
//   width: 100%;

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//     gap: 20px;
//     padding: 16px 0;
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     gap: 16px;
//     padding: 16px 0;
//   }

//   @media (max-width: 640px) {
//     grid-template-columns: 1fr;
//     gap: 16px;
//     padding: 12px 0;
//   }

//   @media (max-width: 480px) {
//     gap: 12px;
//     padding: 8px 0;
//   }
// `;

// // Pagination styles (for cards view only)
// export const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 12px;
//   margin-top: 24px;
//   flex-wrap: wrap;
//   width: 100%;

//   @media (max-width: 768px) {
//     gap: 8px;
//     margin-top: 20px;
//   }

//   @media (max-width: 480px) {
//     gap: 6px;
//     margin-top: 16px;
//   }
// `;

// export const PaginationButton = styled.button<{
//   isActive?: boolean;
//   disabled?: boolean;
// }>`
//   padding: 8px 12px;
//   border: 1px solid #e2e8f0;
//   background: ${(props) => (props.isActive ? "#3b82f6" : "white")};
//   color: ${(props) => (props.isActive ? "white" : "#374151")};
//   border-radius: 6px;
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   font-size: 14px;
//   transition: all 0.2s ease;
//   opacity: ${(props) => (props.disabled ? 0.5 : 1)};
//   min-width: 40px;
//   font-weight: 500;

//   &:hover:not(:disabled) {
//     background: ${(props) => (props.isActive ? "#2563eb" : "#f1f5f9")};
//   }

//   &:focus {
//     outline: 2px solid #3b82f6;
//     outline-offset: 2px;
//   }

//   @media (max-width: 768px) {
//     padding: 6px 10px;
//     font-size: 13px;
//     min-width: 36px;
//   }

//   @media (max-width: 480px) {
//     padding: 4px 8px;
//     font-size: 12px;
//     min-width: 32px;
//   }
// `;

// export const PaginationInfo = styled.span`
//   color: #64748b;
//   font-size: 14px;
//   margin: 0 8px;
//   white-space: nowrap;

//   @media (max-width: 768px) {
//     font-size: 12px;
//     margin: 0 4px;
//   }

//   @media (max-width: 640px) {
//     display: none;
//   }
// `;

import styled from "styled-components";

// Main container styles
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

// Tab styles
export const TabsContainer = styled.div`
  border-bottom: 2px solid #e2e8f0;
  margin-bottom: 24px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
`;

export const TabsList = styled.div`
  display: flex;
  gap: 8px;
  role: tablist;
  width: 100%;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  max-width: 200px;
  padding: 12px 24px;
  border: none;
  background: ${(props) => (props.isActive ? "#3b82f6" : "transparent")};
  color: ${(props) => (props.isActive ? "white" : "#64748b")};
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    background: ${(props) => (props.isActive ? "#2563eb" : "#f1f5f9")};
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 15px;
    max-width: none;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

// Loading and error states
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
  color: #64748b;
  text-align: center;

  @media (max-width: 768px) {
    height: 150px;
    font-size: 16px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    height: 120px;
    font-size: 14px;
    padding: 0 16px;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #dc2626;
  font-size: 18px;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    height: 150px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    height: 120px;
    font-size: 14px;
    padding: 0 16px;
  }
`;

// Cards view styles
export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 20px 0;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    padding: 16px 0;
    max-height: 75vh;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    padding: 16px 0;
    max-height: 70vh;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 12px 0;
    max-height: 75vh;
  }

  @media (max-width: 480px) {
    gap: 12px;
    padding: 8px 0;
    max-height: 80vh;
  }

  /* Custom scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;

// Pagination styles (for cards view only)
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    gap: 8px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    gap: 6px;
    margin-top: 16px;
  }
`;

export const PaginationButton = styled.button<{
  isActive?: boolean;
  disabled?: boolean;
}>`
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  background: ${(props) => (props.isActive ? "#3b82f6" : "white")};
  color: ${(props) => (props.isActive ? "white" : "#374151")};
  border-radius: 6px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 14px;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  min-width: 40px;
  font-weight: 500;

  &:hover:not(:disabled) {
    background: ${(props) => (props.isActive ? "#2563eb" : "#f1f5f9")};
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 13px;
    min-width: 36px;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 12px;
    min-width: 32px;
  }
`;

export const PaginationInfo = styled.span`
  color: #64748b;
  font-size: 14px;
  margin: 0 8px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0 4px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;
