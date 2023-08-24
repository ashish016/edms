import React from 'react'
import {
  CRow,
  CCard,
  CCol,
  CCardBody,
  CCardText,
  CCardTitle,
  CButton,
  CContainer,
} from '@coreui/react'


function Analysis() {
  return (
    <div>
      <CContainer >
        <CRow>
          <CCol sm={6}>
            <CCard className='ccard'>
              <CCardBody>
                <CCardTitle>IQOQ Database Monitoring</CCardTitle>
                <CCardText>Monitors the IQOQ Request table for any failures.</CCardText>
                <CButton href="/datatable#/datatable">More Details</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm={6}>
            <CCard className='ccard'>
              <CCardBody>
                <CCardTitle>SDLC-AM integration failure</CCardTitle>
                <CCardText>
                  Monitors the AM integration table for failuressame with the Support DL.
                </CCardText>
                <CButton href="/datatable#/datatable">More Details</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm={6}>
            <CCard className='ccard'>
              <CCardBody>
                <CCardTitle>EDMS-EDMS Viewer Rendition Monitoring</CCardTitle>
                <CCardText>
                  Monitor for document not published into EDMS Viewer due to no Rendition present in
                  EDMS.
                </CCardText>
                <CButton href="/datatable#/datatable">More Details</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm={6}>
            <CCard className='ccard'>
              <CCardBody>
                <CCardTitle>Report of SUMMIT document</CCardTitle>
                <CCardText>
                  Generate a report in excel combining all feed excel files weekly, monthly and
                  share the same with the Support DL.
                </CCardText>
                <CButton href="/datatable#/datatable">More Details</CButton>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Analysis
