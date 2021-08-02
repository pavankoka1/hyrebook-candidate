import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.input`
	position: relative;
	width: 100%;
	min-width: 200px;
	border: none;
	padding: 12px 20px;
	color: #999999;
	border-radius: 5px;

	&:focus {
		outline: none;
		border: none;
	}
`

const PlaceHolderWrapper = styled.p`
	position: absolute;
	font-size: 16px;
	font-family: 'Montserrat';
	width: fit-content;
	font-weight: ${(props) =>
		props.placeholderStyles.weight ? props.placeholderStyles.weight : 400};
	color: ${(props) =>
		props.placeholderStyles.color ? props.placeholderStyles.color : '#000'};
	left: ${(props) => (props.isFocus ? 0 : '50%')};
	top: ${(props) => (props.isFocus ? '-5px' : '50%')};
	transform: translate(
		${(props) => (props.isFocus ? '0, -100%' : '-50%, -50%')}
	);
	transition: all 250ms ease-in;
`

function Input(props) {
	const {
		focus,
		className,
		value,
		styles,
		placeholderStyles = {},
		placeholder,
		onChange,
		onEnter,
	} = props
	const [isFocus, setIsFocus] = useState(focus)
	const wrapperRef = useRef(null)
	const inputRef = useRef(null)

	useEffect(() => {
		window.addEventListener('click', handleClick)

		return () => window.removeEventListener('click', handleClick)
	}, [])

	function handleClick(e) {
		if (wrapperRef && wrapperRef.current && e.target) {
			const isClickedInside = wrapperRef.current.contains(e.target)

			setIsFocus(isClickedInside)
			if (isClickedInside) {
				inputRef.current.focus()
			}
		}
	}

	return (
		<div
			className={className}
			style={{ position: 'relative', ...styles }}
			ref={wrapperRef}
		>
			<InputWrapper
				className="bg-f2f2f2"
				ref={inputRef}
				value={value}
				onChange={(e) =>
					onChange && onChange({ value: e.target.value })
				}
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						onEnter && onEnter()
					}
				}}
			/>
			<PlaceHolderWrapper
				isFocus={value || isFocus}
				placeholderStyles={placeholderStyles}
			>
				{placeholder}
			</PlaceHolderWrapper>
		</div>
	)
}

export default Input
