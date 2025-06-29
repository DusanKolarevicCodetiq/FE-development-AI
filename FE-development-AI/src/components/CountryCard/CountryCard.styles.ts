import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

export const Card = styled.article`
  background: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 0; /* Prevents flex items from overflowing */
  
  &:hover, &:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    outline: none;
  }
  
  &:focus-visible {
    box-shadow: 0 0 0 2px #3182ce;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    &:hover, &:focus-visible {
      transform: none;
    }
  }
`;

export const FlagImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-bottom: 1px solid #e2e8f0;
  background-color: #f7fafc;
  
  @media (min-width: 768px) {
    height: 150px;
  }
  
  @media (min-width: 1024px) {
    height: 160px;
  }
`;

export const SkeletonImage = styled.div`
  width: 100%;
  height: 160px;
  background: linear-gradient(90deg, #f0f2f5 25%, #e6e9ed 50%, #f0f2f5 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  
  @media (min-width: 768px) {
    height: 180px;
  }
  
  @media (min-width: 1024px) {
    height: 200px;
  }
`;

export const CardContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; /* Prevents flex items from overflowing */
  
  @media (min-width: 768px) {
    padding: 1.25rem;
  }
`;

export const CountryName = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: #2d3748;
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 1.05rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;

export const DetailItem = styled.p`
  margin: 0.1rem 0;
  font-size: 0.8rem;
  color: #4a5568;
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  strong {
    font-weight: 500;
    color: #2d3748;
    margin-right: 0.2rem;
  }
  
  @media (min-width: 768px) {
    font-size: 0.825rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 0.85rem;
  }
`;

export const SkeletonLine = styled.div<{ width?: string; height?: string }>`
  background: linear-gradient(90deg, #f0f2f5 25%, #e6e9ed 50%, #f0f2f5 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  height: ${({ height = '1rem' }) => height};
  width: ${({ width = '100%' }) => width};
  margin-bottom: 0.5rem;
  border-radius: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;
