interface SvgIconProps {
  name: string,
  prefix?: string,
  style?: any,
  onClick?: () => void
}

const SvgIcon = (props: SvgIconProps) => {
  const {
    name,
    prefix = 'icon',
    style = { width: '16px', height: '16px' },
    onClick
  } = props
  const symbolId = `#${prefix}-${name}`
  return (
    <svg
      aria-hidden="true"
      style={{
        width: '16px',
        height: '16px',
        ...style
      }}
      onClick={onClick}
    >
      <use href={symbolId}/>
    </svg>
  )
}

export default SvgIcon
