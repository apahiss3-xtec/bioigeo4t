import { sa1, sa1Sessions } from './sa1/sa1-sessions.js'
import { sa2, sa2Sessions } from './sa2/sa2-sessions.js'
import { sa3, sa3Sessions } from './sa3/sa3-sessions.js'
import { sa4, sa4Sessions } from './sa4/sa4-sessions.js'
import { sa5, sa5Sessions } from './sa5/sa5-sessions.js'
import { sa6, sa6Sessions } from './sa6/sa6-sessions.js'
import { sa7, sa7Sessions } from './sa7/sa7-sessions.js'
import { sa1Avaluacio } from './sa1/avaluacio.js'
import { sa2Avaluacio } from './sa2/avaluacio.js'
import { sa3Avaluacio } from './sa3/avaluacio.js'
import { sa4Avaluacio } from './sa4/avaluacio.js'
import { sa5Avaluacio } from './sa5/avaluacio.js'
import { sa6Avaluacio } from './sa6/avaluacio.js'
import { sa7Avaluacio } from './sa7/avaluacio.js'

// SA publicades amb contingut complet
export const publishedSAs = [
  { ...sa1, sessionsData: sa1Sessions, avaluacio: sa1Avaluacio, published: true },
  { ...sa2, sessionsData: sa2Sessions, avaluacio: sa2Avaluacio, published: true },
  { ...sa3, sessionsData: sa3Sessions, avaluacio: sa3Avaluacio, published: true },
  { ...sa4, sessionsData: sa4Sessions, avaluacio: sa4Avaluacio, published: true },
  { ...sa5, sessionsData: sa5Sessions, avaluacio: sa5Avaluacio, published: true },
  { ...sa6, sessionsData: sa6Sessions, avaluacio: sa6Avaluacio, published: true },
  { ...sa7, sessionsData: sa7Sessions, avaluacio: sa7Avaluacio, published: true }
]

// SA pendents
export const upcomingSAs = []

export const allSAs = [...publishedSAs, ...upcomingSAs]

export const getSA = (saId) => allSAs.find((sa) => sa.id === saId)

export const getSession = (saId, sessionId) => {
  const sa = publishedSAs.find((s) => s.id === saId)
  if (!sa) return null
  return sa.sessionsData.find((s) => s.id === sessionId) || null
}