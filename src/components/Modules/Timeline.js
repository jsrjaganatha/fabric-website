import React, { useState } from 'react'
import styled from 'styled-components'
import { useWindowWidth } from '../../hooks'
import { Module } from '../Layout'
import { Paragraph } from '../Typography'

const TimelineTabs = styled.article`
    padding-left: 2rem;
    display: flex;
    margin: 8rem 0 0 0;
    display: flex;
    justify-content: center;
    width: 100%;
`

const TimelineTab = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: transform 250ms ease-out;
    transform-origin: 0% 50%;
    transform: translateY(1.6rem) rotate(${ props => props.compact ? '-90deg' : '-40deg' });
    cursor: pointer;
`

const Tag = styled.div`
    flex: 1;
    height: 2.5rem;
    padding: 0.5rem 0.75rem 0.5rem 1.75rem;
    border-radius: 4px;
    border-width: 0 0.25rem 0 0: 
    border-style: solid;
    border-color: ${ props => props.active ? 'var(--color-secondary)' : 'var(--color-primary)' };
    font-weight: bold;
    white-space: nowrap;
    filter: drop-shadow(0 0 3px #00000022);
    transform: ${ props => props.active ? 'translateX(1rem)' : 'translateX(2rem)' };
    ::selection { background: var(--color-primary); }
    ::-moz-selection { background: var(--color-primary); }
    transition: color 250ms, background-color 250ms, transform 250ms ease-out;
    color: ${ props => props.active ? 'var(--color-white)' : 'var(--color-primary)' };
    background-color: ${ props => props.active ? 'var(--color-primary)' : 'var(--color-primary-light)' };
    clip-path: polygon(1.4rem 0%, 100% 0%, 100% 100%, 1.4rem 100%, 0% 50%);
    &::after { // guide
        content: "";
        left: -3rem;
        top: 50%;
        height: 1px;
        width: 3rem;
        background-color: var(--color-primary);
    }
    &:hover {
        color: ${ props => props.active ? 'var(--color-white)' : 'var(--color-primary-dark)' };
        transform: ${ props => props.active ? 'translateX(1rem)' : 'translateX(1.85rem)' };
    }
`

const Node = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: ${ props => props.active ? 'var(--color-primary)' : 'var(--color-white)' };
    border-radius: 50%;
    border-width: 0.25rem;
    border-style: solid;
    border-color: var(--color-primary);
    transition: bckground-color 250ms, border-color 500ms;
`

const TimelineContent = styled.div`
    border: 2px solid var(--color-primary);
    border-radius: 0.25rem;
    padding: 1rem 1rem 0 1rem;
    background-color: var(--color-primary-light);
    z-index: 99;
`

export const TimelineModule = ({ items }) => {
    const { isCompact } = useWindowWidth()
    const [tabIndex, setTabIndex] = useState(0)
    
    const handleToggleTab = newIndex => event => {
        console.log(event)
        setTabIndex(newIndex)
    }

    return (
        <Module title="Development Timeline">
            <TimelineTabs>
                {
                    items.map(({ node: item }, i) => (
                        <TimelineTab onClick={ handleToggleTab(i) } compact={ isCompact }>
                            <Node active={ i === tabIndex } />
                            <Tag
                                key={ item.frontmatter.title }
                                active={ i === tabIndex }
                            >
                                { item.frontmatter.title }
                            </Tag>
                        </TimelineTab>
                    ))
                }
            </TimelineTabs>
            <TimelineContent>
                <Paragraph dangerouslySetInnerHTML={{ __html: items[tabIndex].node.html }} />
            </TimelineContent>
        </Module>
    )
}
