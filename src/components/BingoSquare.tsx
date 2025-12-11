import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center rounded-3xl transition-all duration-150 select-none min-h-[60px] text-xs leading-tight'; // more rounded
  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-amber-200 border-amber-400 text-amber-900'
      : 'bg-marked border-marked-border text-green-800'
    : 'bg-white text-gray-700 active:bg-gray-100';
  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm' : '';

  return (
    <>
      <style>
        {`
          @keyframes pastelBorder {
            0% { border-color: #fbc4ab; }
            25% { border-color: #fbd1ab; }
            50% { border-color: #c4fbab; }
            75% { border-color: #abc4fb; }
            100% { border-color: #fbc4ab; }
          }
          .animated-border {
            border-width: 2px;
            border-style: solid;
            animation: pastelBorder 8s infinite linear;
          }
        `}
      </style>
      <button
        onClick={onClick}
        disabled={square.isFreeSpace}
        className={`${baseClasses} ${stateClasses} ${freeSpaceClasses} frost animated-border`}
        aria-pressed={square.isMarked}
        aria-label={square.isFreeSpace ? 'Free space' : square.text}
      >
        <span className="wrap-break-word hyphens-auto">{square.text}</span>
        {square.isMarked && !square.isFreeSpace && (
          <span className="absolute top-0.5 right-0.5 text-green-600 text-xs">✓</span>
        )}
      </button>
    </>
  );
}
