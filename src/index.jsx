import { useEffect, useState } from "react"

const COLORS = ["#ffd9e2", "#fff3b0", "#cdeedb", "#d2e4fb", "#e2d8fa", "#ffd9bf"]
const TILTS = [-3, -2, -1, 1, 2, 3]

const pick = (list) => list[Math.floor(Math.random() * list.length)]

const StickIt = ({
  title,
  icon,
  children,
  colors = COLORS,
  color,
  tilt,
  width = 256,
  fontFamily = "inherit",
  className,
  style,
}) => {
  const [look, setLook] = useState({ color: colors[0], tilt: 0 })

  useEffect(() => {
    setLook({ color: pick(colors), tilt: pick(TILTS) })
  }, [])

  const noteColor = color ?? look.color
  const noteTilt = tilt ?? look.tilt

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width,
        transform: `rotate(${noteTilt}deg)`,
        filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))",
        ...style,
      }}
    >
      <svg
        viewBox="0 0 260 250"
        width="100%"
        stroke="#000"
        strokeWidth="4"
        strokeLinejoin="round"
        style={{ display: "block" }}
      >
        <path
          d="M8 34Q8 20 22 20H238Q252 20 252 34V190Q252 198 246 204L214 236Q208 242 200 242H22Q8 242 8 228Z"
          fill={noteColor}
        />
        <path d="M251 199L209 241V206Q209 199 216 199Z" fill="rgba(0, 0, 0, 0.15)" />
        <rect
          x="78"
          y="5"
          width="104"
          height="30"
          rx="5"
          transform="rotate(-2 130 20)"
          fill="rgba(219, 231, 245, 0.7)"
        />
        <text
          x="130"
          y="27"
          textAnchor="middle"
          fontSize="20"
          fontWeight="700"
          fill="#000"
          stroke="none"
          style={{ fontFamily }}
        >
          {title}
        </text>
      </svg>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "22%",
          bottom: "22%",
          padding: "0 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          color: "#171717",
          fontFamily,
        }}
      >
        <div style={{ fontSize: "1.875rem" }}>{icon}</div>
        <p style={{ margin: 0, fontSize: "1.125rem", lineHeight: 1.35 }}>{children}</p>
      </div>
    </div>
  )
}

export default StickIt
export { StickIt }