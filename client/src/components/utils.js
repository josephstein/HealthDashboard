import React from 'react'
import Moment from 'react-moment'

export function renderBooleanRow(label, value, isAlignedRight = true) {
  const displayedValue = (value === true ? "Yes" : "No")
  const valueClassName = (isAlignedRight === true ? "text-right" : "")

  return (
    <tr>
      <td><b>{label}</b></td>
      <td className={valueClassName}>{displayedValue}</td>
    </tr>
  )
}

export function renderDateRow(label, value, isAlignedRight = true) {
  const date = new Date(value)
  const valueClassName = (isAlignedRight === true ? "text-right" : "")

  return (
    <tr>
      <td><b>{label}</b></td>
      <td className={valueClassName}><Moment format="MM/DD/YYYY">{date}</Moment></td>
    </tr>
  )
}

export function renderTextRow(label, value, isAlignedRight = true) {
  const displayedValue = (value !== '' ? value : "-")
  const valueClassName = (isAlignedRight === true ? "text-right" : "")

  return (
    <tr>
      <td><b>{label}</b></td>
      <td className={valueClassName}>{displayedValue}</td>
    </tr>
  )
}

export function renderEmailRow(value, isActive) {
  const url = "mailto:" + value
  const iconClass = "glyphicon glyphicon-envelope text-" + (isActive === true ? "success" : "danger")
  const displayedValue = (value !== '' ? value : "not set")

  if (value === '') {
    return (
      <tr>
        <td><b>Email</b></td>
        <td>-</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td><b>Email</b></td>
        <td><a href={url}>{displayedValue}</a></td>
        <td className="text-right"><span className={iconClass} title="Email Notifications"></span></td>
      </tr>
    )
  }
}

export function renderPhoneRow(value, isCallActive, isTextActive) {
  const textClass = "glyphicon glyphicon-phone text-" + (isTextActive === true ? "success" : "danger")
  const callClass = "glyphicon glyphicon-earphone text-" + (isCallActive === true ? "success" : "danger")

  return (
    <tr>
      <td><b>Phone</b></td>
      <td>{value}</td>
      <td className="text-right"><span className={textClass} title="Text Notifications"></span></td>
      <td className="text-right"><span className={callClass} title="Call Notifications"></span></td>
    </tr>
  )
}

export function renderPosNegNumberRow(label, value, isAlignedRight = false) {
  const valueClassName = (isAlignedRight === true ? "text-right" : "")

  let className = ""
  if (value > 0) {
    className = "glyphicon glyphicon-arrow-up text-success"
  } else if (value < 0) {
    className = "glyphicon glyphicon-arrow-down text-danger"
  }
  

  return (
    <tr>
      <td><b>{label}</b></td>
      <td className={valueClassName}><span className={className}></span> {Math.abs(value)}</td>
    </tr>
  )
}

export function renderPercentageRow(label, value, isAlignedRight = false) {
  const valueClassName = (isAlignedRight === true ? "text-right" : "")
  let displayValue = (value * 100) + "%"

  return (
    <tr>
      <td><b>{label}</b></td>
      <td className={valueClassName}><span></span> {displayValue}</td>
    </tr>
  )
}