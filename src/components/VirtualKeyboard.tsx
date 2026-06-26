const ROWS = [
  ["`","1","2","3","4","5","6","7","8","9","0","-","="],
  ["q","w","e","r","t","y","u","i","o","p","[","]","\\"],
  ["a","s","d","f","g","h","j","k","l",";","'"],
  ["z","x","c","v","b","n","m",",",".","/"],
];

interface Props {
  nextChar?: string;
  caps?: boolean;
}

export function VirtualKeyboard({ nextChar, caps }: Props) {
  const target = (nextChar ?? "").toLowerCase();
  return (
    <div className="mt-6 select-none">
      <div className="flex flex-col items-center gap-1.5">
        {ROWS.map((row, ri) => (
          <div key={ri} className="flex gap-1.5" style={{ marginLeft: ri * 12 }}>
            {row.map((k) => {
              const active = target === k || (target === " " && false);
              return (
                <div
                  key={k}
                  className={`h-9 sm:h-10 min-w-8 sm:min-w-9 px-2 grid place-items-center rounded-md text-[11px] sm:text-xs font-mono font-semibold border transition-all ${
                    active
                      ? "gradient-bg text-primary-foreground border-transparent scale-110 shadow-glow"
                      : "bg-card border-border text-foreground/70"
                  }`}
                >
                  {k.toUpperCase()}
                </div>
              );
            })}
          </div>
        ))}
        <div
          className={`mt-1 h-9 sm:h-10 w-2/3 max-w-md rounded-md border text-xs grid place-items-center transition-all ${
            target === " "
              ? "gradient-bg text-primary-foreground border-transparent scale-105 shadow-glow"
              : "bg-card border-border text-muted-foreground"
          }`}
        >
          SPACE
        </div>
      </div>
      <div className="mt-3 text-center text-xs text-muted-foreground">
        Caps Lock: <span className={caps ? "text-destructive font-semibold" : "font-semibold"}>{caps ? "ON" : "off"}</span>
      </div>
    </div>
  );
}
