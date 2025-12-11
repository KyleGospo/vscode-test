import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center rounded-3xl transition-all duration-150 select-none min-h-[60px] text-xs leading-tight bg-white';
  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-amber-200 text-amber-900'
      : 'bg-marked text-green-800'
    : 'text-gray-700 active:bg-gray-100';
  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm' : '';

  return (
    <>
      <style>
        {`
          @keyframes rotateBorder {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .gradient-border-wrapper {
            position: relative;
            border-radius: 1rem; /* rounded-3xl */
            padding: 1.5px; /* thinner border */
            background: conic-gradient(
              from 0deg,
              #fbc4ab,
              #fbd1ab,
              #c4fbab,
              #abc4fb,
              #fbc4ab
            );
            animation: rotateBorder 10s linear infinite;
            box-shadow: 0 0 8px rgba(251, 196, 171, 0.6),
                        0 0 8px rgba(251, 209, 171, 0.6),
                        0 0 8px rgba(196, 251, 171, 0.6),
                        0 0 8px rgba(171, 196, 251, 0.6); /* soft glow */
          }

          .gradient-border-content {
            border-radius: inherit;
            background-color: white; /* button bg */
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .gradient-border-content button {
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background-color: inherit;
            border: none;
            padding: 0.25rem;
          }
        `}
      </style>

      <div className="gradient-border-wrapper">
        <div className="gradient-border-content">
          <button
            onClick={onClick}
            disabled={square.isFreeSpace}
            className={`${baseClasses} ${stateClasses} ${freeSpaceClasses} frost`}
            aria-pressed={square.isMarked}
            aria-label={square.isFreeSpace ? 'Free space' : square.text}
          >
            <span className="wrap-break-word hyphens-auto">{square.text}</span>
            {square.isMarked && !square.isFreeSpace && (
              <span className="absolute top-0.5 right-0.5 text-green-600 text-xs">✓</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
