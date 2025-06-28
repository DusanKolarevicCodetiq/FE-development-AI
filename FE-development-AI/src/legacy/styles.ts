import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 20px 0;
  color: #1e293b;
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

export const LoadingMessage = styled.p`
  font-size: 18px;
  color: #64748b;
  text-align: center;
  margin: 40px 0;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 30px 0;
  }
`;

export const ErrorMessage = styled.p`
  color: #dc2626;
  font-size: 16px;
  text-align: center;
  margin: 20px 0;
  padding: 12px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 16px 0;
    padding: 10px;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    margin-bottom: 16px;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  color: #374151;
  font-size: 14px;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  color: #374151;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  min-width: 120px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #9ca3af;
  }

  @media (max-width: 640px) {
    width: 100%;
    min-width: auto;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px 10px;
  }
`;

export const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  color: #374151;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  flex: 1;
  min-width: 200px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #9ca3af;
  }

  @media (max-width: 640px) {
    width: 100%;
    min-width: auto;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px 10px;
  }
`;

export const CountriesList = styled.ul`
  padding: 0;
  margin: 0;
  flex: 1;
  overflow-y: auto;
  max-height: 70vh;

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

  @media (max-width: 768px) {
    max-height: 60vh;
  }

  @media (max-width: 480px) {
    max-height: 65vh;
  }
`;

export const CountryItem = styled.li`
  list-style: none;
  margin-bottom: 16px;
  border: 1px solid #e5e7eb;
  padding: 16px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 12px;
    margin-bottom: 12px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-bottom: 10px;
    gap: 8px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FlagImage = styled.img`
  width: 40px;
  height: 25px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 36px;
    height: 22px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 20px;
    align-self: flex-start;
  }
`;

export const CountryInfo = styled.div`
  flex: 1;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CountryName = styled.strong`
  color: #1e293b;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    display: block;
    margin-bottom: 4px;
  }
`;

export const CountryDetails = styled.span`
  color: #64748b;
  font-size: 14px;
  margin-left: 8px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-left: 0;
    display: block;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #64748b;

  @media (max-width: 768px) {
    padding: 30px 16px;
  }

  @media (max-width: 480px) {
    padding: 20px 12px;
  }
`;

export const EmptyStateText = styled.p`
  font-size: 16px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
