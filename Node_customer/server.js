const express = require("express");
var request = require("request");
const parser = require("xml-js");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());

app.post("/login", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SK_CP_LOGIN>
        <!--You may enter the following 2 items in any order-->
        <!--Optional:-->
        <ICUS_ID>`+ uname + `</ICUS_ID>
        <!--Optional:-->
        <I_PASSWORD>`+ pwd + `</I_PASSWORD>
     </urn:ZFM_SK_CP_LOGIN>
  </soapenv:Body>
</soapenv:Envelope>`;
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_cust_login_sk&interfaceNamespace=http://cust_portal_sk.com',
    'headers': {
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Content-Type': 'application/xml',
      'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcyMDA5MDEFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzIwMDkwMTU5WjAjBgkqhkiG9w0BCQQxFgQUPlGcwK0D4SGNCDiP%2FfRZdAD%2FMGkwCQYHKoZIzjgEAwQuMCwCFG7Dr8Ar5VCTunA%2FGt4%2FdxQLxYJwAhR6tVTdZ0zjfKjHwv2FvHeOpg7OEQ%3D%3D; JSESSIONID=HGBVz5Z8YvviFyj1rw8juXbgstcaggF-Y2kA_SAPz8r-6aYdcBLzwb_Z5DryUxqa; saplb_*=(J2EE6906720)6906750'
    },
    body: postData
  };
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/inquiry", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SK_CP_INQUIRY>
        <!--You may enter the following 2 items in any order-->
        <!--Optional:-->
        <I_CUSTID>`+ uname + `</I_CUSTID>
        <!--Optional:-->
        <IT_INQUIRY_LIST>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <MANDT></MANDT>
              <!--Optional:-->
              <VBELN></VBELN>
              <!--Optional:-->
              <ERDAT></ERDAT>
              <!--Optional:-->
              <ERZET></ERZET>
              <!--Optional:-->
              <ERNAM></ERNAM>
              <!--Optional:-->
              <ANGDT></ANGDT>
              <!--Optional:-->
              <BNDDT></BNDDT>
              <!--Optional:-->
              <AUDAT></AUDAT>
              <!--Optional:-->
              <VBTYP></VBTYP>
              <!--Optional:-->
              <TRVOG></TRVOG>
              <!--Optional:-->
              <AUART></AUART>
              <!--Optional:-->
              <AUGRU></AUGRU>
              <!--Optional:-->
              <GWLDT></GWLDT>
              <!--Optional:-->
              <SUBMI></SUBMI>
              <!--Optional:-->
              <LIFSK></LIFSK>
              <!--Optional:-->
              <FAKSK></FAKSK>
              <!--Optional:-->
              <NETWR></NETWR>
              <!--Optional:-->
              <WAERK></WAERK>
              <!--Optional:-->
              <VKORG></VKORG>
              <!--Optional:-->
              <VTWEG></VTWEG>
              <!--Optional:-->
              <SPART></SPART>
              <!--Optional:-->
              <VKGRP></VKGRP>
              <!--Optional:-->
              <VKBUR></VKBUR>
              <!--Optional:-->
              <GSBER></GSBER>
              <!--Optional:-->
              <GSKST></GSKST>
              <!--Optional:-->
              <GUEBG></GUEBG>
              <!--Optional:-->
              <GUEEN></GUEEN>
              <!--Optional:-->
              <KNUMV></KNUMV>
              <!--Optional:-->
              <VDATU></VDATU>
              <!--Optional:-->
              <VPRGR></VPRGR>
              <!--Optional:-->
              <AUTLF></AUTLF>
              <!--Optional:-->
              <VBKLA></VBKLA>
              <!--Optional:-->
              <VBKLT></VBKLT>
              <!--Optional:-->
              <KALSM></KALSM>
              <!--Optional:-->
              <VSBED></VSBED>
              <!--Optional:-->
              <FKARA></FKARA>
              <!--Optional:-->
              <AWAHR></AWAHR>
              <!--Optional:-->
              <KTEXT></KTEXT>
              <!--Optional:-->
              <BSTNK></BSTNK>
              <!--Optional:-->
              <BSARK></BSARK>
              <!--Optional:-->
              <BSTDK></BSTDK>
              <!--Optional:-->
              <BSTZD></BSTZD>
              <!--Optional:-->
              <IHREZ></IHREZ>
              <!--Optional:-->
              <BNAME></BNAME>
              <!--Optional:-->
              <TELF1></TELF1>
              <!--Optional:-->
              <MAHZA></MAHZA>
              <!--Optional:-->
              <MAHDT></MAHDT>
              <!--Optional:-->
              <KUNNR></KUNNR>
              <!--Optional:-->
              <KOSTL></KOSTL>
              <!--Optional:-->
              <STAFO></STAFO>
              <!--Optional:-->
              <STWAE></STWAE>
              <!--Optional:-->
              <AEDAT></AEDAT>
              <!--Optional:-->
              <KVGR1></KVGR1>
              <!--Optional:-->
              <KVGR2></KVGR2>
              <!--Optional:-->
              <KVGR3></KVGR3>
              <!--Optional:-->
              <KVGR4></KVGR4>
              <!--Optional:-->
              <KVGR5></KVGR5>
              <!--Optional:-->
              <KNUMA></KNUMA>
              <!--Optional:-->
              <KOKRS></KOKRS>
              <!--Optional:-->
              <PS_PSP_PNR></PS_PSP_PNR>
              <!--Optional:-->
              <KURST></KURST>
              <!--Optional:-->
              <KKBER></KKBER>
              <!--Optional:-->
              <KNKLI></KNKLI>
              <!--Optional:-->
              <GRUPP></GRUPP>
              <!--Optional:-->
              <SBGRP></SBGRP>
              <!--Optional:-->
              <CTLPC></CTLPC>
              <!--Optional:-->
              <CMWAE></CMWAE>
              <!--Optional:-->
              <CMFRE></CMFRE>
              <!--Optional:-->
              <CMNUP></CMNUP>
              <!--Optional:-->
              <CMNGV></CMNGV>
              <!--Optional:-->
              <AMTBL></AMTBL>
              <!--Optional:-->
              <HITYP_PR></HITYP_PR>
              <!--Optional:-->
              <ABRVW></ABRVW>
              <!--Optional:-->
              <ABDIS></ABDIS>
              <!--Optional:-->
              <VGBEL></VGBEL>
              <!--Optional:-->
              <OBJNR></OBJNR>
              <!--Optional:-->
              <BUKRS_VF></BUKRS_VF>
              <!--Optional:-->
              <TAXK1></TAXK1>
              <!--Optional:-->
              <TAXK2></TAXK2>
              <!--Optional:-->
              <TAXK3></TAXK3>
              <!--Optional:-->
              <TAXK4></TAXK4>
              <!--Optional:-->
              <TAXK5></TAXK5>
              <!--Optional:-->
              <TAXK6></TAXK6>
              <!--Optional:-->
              <TAXK7></TAXK7>
              <!--Optional:-->
              <TAXK8></TAXK8>
              <!--Optional:-->
              <TAXK9></TAXK9>
              <!--Optional:-->
              <XBLNR></XBLNR>
              <!--Optional:-->
              <ZUONR></ZUONR>
              <!--Optional:-->
              <VGTYP></VGTYP>
              <!--Optional:-->
              <KALSM_CH></KALSM_CH>
              <!--Optional:-->
              <AGRZR></AGRZR>
              <!--Optional:-->
              <AUFNR></AUFNR>
              <!--Optional:-->
              <QMNUM></QMNUM>
              <!--Optional:-->
              <VBELN_GRP></VBELN_GRP>
              <!--Optional:-->
              <SCHEME_GRP></SCHEME_GRP>
              <!--Optional:-->
              <ABRUF_PART></ABRUF_PART>
              <!--Optional:-->
              <ABHOD></ABHOD>
              <!--Optional:-->
              <ABHOV></ABHOV>
              <!--Optional:-->
              <ABHOB></ABHOB>
              <!--Optional:-->
              <RPLNR></RPLNR>
              <!--Optional:-->
              <VZEIT></VZEIT>
              <!--Optional:-->
              <STCEG_L></STCEG_L>
              <!--Optional:-->
              <LANDTX></LANDTX>
              <!--Optional:-->
              <XEGDR></XEGDR>
              <!--Optional:-->
              <ENQUEUE_GRP></ENQUEUE_GRP>
              <!--Optional:-->
              <DAT_FZAU></DAT_FZAU>
              <!--Optional:-->
              <FMBDAT></FMBDAT>
              <!--Optional:-->
              <VSNMR_V></VSNMR_V>
              <!--Optional:-->
              <HANDLE></HANDLE>
              <!--Optional:-->
              <PROLI></PROLI>
              <!--Optional:-->
              <CONT_DG></CONT_DG>
              <!--Optional:-->
              <CRM_GUID></CRM_GUID>
              <!--Optional:-->
              <UPD_TMSTMP></UPD_TMSTMP>
              <!--Optional:-->
              <MSR_ID></MSR_ID>
              <!--Optional:-->
              <TM_CTRL_KEY></TM_CTRL_KEY>
              <!--Optional:-->
              <HANDOVERLOC></HANDOVERLOC>
              <!--Optional:-->
              <_DATAAGING></_DATAAGING>
              <!--Optional:-->
              <PSM_BUDAT></PSM_BUDAT>
              <!--Optional:-->
              <FSH_KVGR6></FSH_KVGR6>
              <!--Optional:-->
              <FSH_KVGR7></FSH_KVGR7>
              <!--Optional:-->
              <FSH_KVGR8></FSH_KVGR8>
              <!--Optional:-->
              <FSH_KVGR9></FSH_KVGR9>
              <!--Optional:-->
              <FSH_KVGR10></FSH_KVGR10>
              <!--Optional:-->
              <FSH_REREG></FSH_REREG>
              <!--Optional:-->
              <FSH_CQ_CHECK></FSH_CQ_CHECK>
              <!--Optional:-->
              <FSH_VRSN_STATUS></FSH_VRSN_STATUS>
              <!--Optional:-->
              <FSH_TRANSACTION></FSH_TRANSACTION>
              <!--Optional:-->
              <FSH_VAS_CG></FSH_VAS_CG>
              <!--Optional:-->
              <FSH_CANDATE></FSH_CANDATE>
              <!--Optional:-->
              <FSH_SS></FSH_SS>
              <!--Optional:-->
              <FSH_OS_STG_CHANGE></FSH_OS_STG_CHANGE>
              <!--Optional:-->
              <SWENR></SWENR>
              <!--Optional:-->
              <SMENR></SMENR>
              <!--Optional:-->
              <PHASE></PHASE>
              <!--Optional:-->
              <MTLAUR></MTLAUR>
              <!--Optional:-->
              <STAGE></STAGE>
              <!--Optional:-->
              <HB_CONT_REASON></HB_CONT_REASON>
              <!--Optional:-->
              <HB_EXPDATE></HB_EXPDATE>
              <!--Optional:-->
              <HB_RESDATE></HB_RESDATE>
              <!--Optional:-->
              <MILL_APPL_ID></MILL_APPL_ID>
              <!--Optional:-->
              <TAS></TAS>
              <!--Optional:-->
              <BETC></BETC>
              <!--Optional:-->
              <MOD_ALLOW></MOD_ALLOW>
              <!--Optional:-->
              <CANCEL_ALLOW></CANCEL_ALLOW>
              <!--Optional:-->
              <PAY_METHOD></PAY_METHOD>
              <!--Optional:-->
              <BPN></BPN>
              <!--Optional:-->
              <REP_FREQ></REP_FREQ>
              <!--Optional:-->
              <LOGSYSB></LOGSYSB>
              <!--Optional:-->
              <KALCD></KALCD>
              <!--Optional:-->
              <MULTI></MULTI>
              <!--Optional:-->
              <SPPAYM></SPPAYM>
              <!--Optional:-->
              <WTYSC_CLM_HDR></WTYSC_CLM_HDR>
           </item>
        </IT_INQUIRY_LIST>
     </urn:ZFM_SK_CP_INQUIRY>
  </soapenv:Body>
</soapenv:Envelope>`;
  var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_cust_inquiry_sk&interfaceNamespace=http://cust_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcyMDA5MDEFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzIwMDkwMTU5WjAjBgkqhkiG9w0BCQQxFgQUPlGcwK0D4SGNCDiP%2FfRZdAD%2FMGkwCQYHKoZIzjgEAwQuMCwCFG7Dr8Ar5VCTunA%2FGt4%2FdxQLxYJwAhR6tVTdZ0zjfKjHwv2FvHeOpg7OEQ%3D%3D; JSESSIONID=HGBVz5Z8YvviFyj1rw8juXbgstcaggF-Y2kA_SAPz8r-6aYdcBLzwb_Z5DryUxqa; JSESSIONMARKID=NrSveAGTyFrlpLDQPyY-9elD6VnpNopSpRnn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/crdbmemo", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SK_CP_CRDBMEMO>
        <!--You may enter the following 2 items in any order-->
        <!--Optional:-->
        <IM_CUSTID>`+uname+`</IM_CUSTID>
        <!--Optional:-->
        <IT_CRDBMEMO_LIST>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <MANDT></MANDT>
              <!--Optional:-->
              <VBELN></VBELN>
              <!--Optional:-->
              <FKART></FKART>
              <!--Optional:-->
              <FKTYP></FKTYP>
              <!--Optional:-->
              <VBTYP></VBTYP>
              <!--Optional:-->
              <WAERK></WAERK>
              <!--Optional:-->
              <VKORG></VKORG>
              <!--Optional:-->
              <VTWEG></VTWEG>
              <!--Optional:-->
              <KALSM></KALSM>
              <!--Optional:-->
              <KNUMV></KNUMV>
              <!--Optional:-->
              <VSBED></VSBED>
              <!--Optional:-->
              <FKDAT></FKDAT>
              <!--Optional:-->
              <BELNR></BELNR>
              <!--Optional:-->
              <GJAHR></GJAHR>
              <!--Optional:-->
              <POPER></POPER>
              <!--Optional:-->
              <KONDA></KONDA>
              <!--Optional:-->
              <KDGRP></KDGRP>
              <!--Optional:-->
              <BZIRK></BZIRK>
              <!--Optional:-->
              <PLTYP></PLTYP>
              <!--Optional:-->
              <INCO1></INCO1>
              <!--Optional:-->
              <INCO2></INCO2>
              <!--Optional:-->
              <EXPKZ></EXPKZ>
              <!--Optional:-->
              <RFBSK></RFBSK>
              <!--Optional:-->
              <MRNKZ></MRNKZ>
              <!--Optional:-->
              <KURRF></KURRF>
              <!--Optional:-->
              <CPKUR></CPKUR>
              <!--Optional:-->
              <VALTG></VALTG>
              <!--Optional:-->
              <VALDT></VALDT>
              <!--Optional:-->
              <ZTERM></ZTERM>
              <!--Optional:-->
              <ZLSCH></ZLSCH>
              <!--Optional:-->
              <KTGRD></KTGRD>
              <!--Optional:-->
              <LAND1></LAND1>
              <!--Optional:-->
              <REGIO></REGIO>
              <!--Optional:-->
              <COUNC></COUNC>
              <!--Optional:-->
              <CITYC></CITYC>
              <!--Optional:-->
              <BUKRS></BUKRS>
              <!--Optional:-->
              <TAXK1></TAXK1>
              <!--Optional:-->
              <TAXK2></TAXK2>
              <!--Optional:-->
              <TAXK3></TAXK3>
              <!--Optional:-->
              <TAXK4></TAXK4>
              <!--Optional:-->
              <TAXK5></TAXK5>
              <!--Optional:-->
              <TAXK6></TAXK6>
              <!--Optional:-->
              <TAXK7></TAXK7>
              <!--Optional:-->
              <TAXK8></TAXK8>
              <!--Optional:-->
              <TAXK9></TAXK9>
              <!--Optional:-->
              <NETWR></NETWR>
              <!--Optional:-->
              <ZUKRI></ZUKRI>
              <!--Optional:-->
              <ERNAM></ERNAM>
              <!--Optional:-->
              <ERZET></ERZET>
              <!--Optional:-->
              <ERDAT></ERDAT>
              <!--Optional:-->
              <STAFO></STAFO>
              <!--Optional:-->
              <KUNRG></KUNRG>
              <!--Optional:-->
              <KUNAG></KUNAG>
              <!--Optional:-->
              <MABER></MABER>
              <!--Optional:-->
              <STWAE></STWAE>
              <!--Optional:-->
              <EXNUM></EXNUM>
              <!--Optional:-->
              <STCEG></STCEG>
              <!--Optional:-->
              <AEDAT></AEDAT>
              <!--Optional:-->
              <SFAKN></SFAKN>
              <!--Optional:-->
              <KNUMA></KNUMA>
              <!--Optional:-->
              <FKART_RL></FKART_RL>
              <!--Optional:-->
              <FKDAT_RL></FKDAT_RL>
              <!--Optional:-->
              <KURST></KURST>
              <!--Optional:-->
              <MSCHL></MSCHL>
              <!--Optional:-->
              <MANSP></MANSP>
              <!--Optional:-->
              <SPART></SPART>
              <!--Optional:-->
              <KKBER></KKBER>
              <!--Optional:-->
              <KNKLI></KNKLI>
              <!--Optional:-->
              <CMWAE></CMWAE>
              <!--Optional:-->
              <CMKUF></CMKUF>
              <!--Optional:-->
              <HITYP_PR></HITYP_PR>
              <!--Optional:-->
              <BSTNK_VF></BSTNK_VF>
              <!--Optional:-->
              <VBUND></VBUND>
              <!--Optional:-->
              <FKART_AB></FKART_AB>
              <!--Optional:-->
              <KAPPL></KAPPL>
              <!--Optional:-->
              <LANDTX></LANDTX>
              <!--Optional:-->
              <STCEG_H></STCEG_H>
              <!--Optional:-->
              <STCEG_L></STCEG_L>
              <!--Optional:-->
              <XBLNR></XBLNR>
              <!--Optional:-->
              <ZUONR></ZUONR>
              <!--Optional:-->
              <MWSBK></MWSBK>
              <!--Optional:-->
              <LOGSYS></LOGSYS>
              <!--Optional:-->
              <FKSTO></FKSTO>
              <!--Optional:-->
              <XEGDR></XEGDR>
              <!--Optional:-->
              <RPLNR></RPLNR>
              <!--Optional:-->
              <LCNUM></LCNUM>
              <!--Optional:-->
              <J_1AFITP></J_1AFITP>
              <!--Optional:-->
              <KURRF_DAT></KURRF_DAT>
              <!--Optional:-->
              <AKWAE></AKWAE>
              <!--Optional:-->
              <AKKUR></AKKUR>
              <!--Optional:-->
              <KIDNO></KIDNO>
              <!--Optional:-->
              <BVTYP></BVTYP>
              <!--Optional:-->
              <NUMPG></NUMPG>
              <!--Optional:-->
              <BUPLA></BUPLA>
              <!--Optional:-->
              <VKONT></VKONT>
              <!--Optional:-->
              <FKK_DOCSTAT></FKK_DOCSTAT>
              <!--Optional:-->
              <NRZAS></NRZAS>
              <!--Optional:-->
              <SPE_BILLING_IND></SPE_BILLING_IND>
              <!--Optional:-->
              <VTREF></VTREF>
              <!--Optional:-->
              <FK_SOURCE_SYS></FK_SOURCE_SYS>
              <!--Optional:-->
              <FKTYP_CRM></FKTYP_CRM>
              <!--Optional:-->
              <STGRD></STGRD>
              <!--Optional:-->
              <VBTYP_EXT></VBTYP_EXT>
              <!--Optional:-->
              <J_1TPBUPL></J_1TPBUPL>
              <!--Optional:-->
              <INCOV></INCOV>
              <!--Optional:-->
              <INCO2_L></INCO2_L>
              <!--Optional:-->
              <INCO3_L></INCO3_L>
              <!--Optional:-->
              <DPC_REL></DPC_REL>
              <!--Optional:-->
              <MNDID></MNDID>
              <!--Optional:-->
              <PAY_TYPE></PAY_TYPE>
              <!--Optional:-->
              <SEPON></SEPON>
              <!--Optional:-->
              <MNDVG></MNDVG>
              <!--Optional:-->
              <SPPAYM></SPPAYM>
              <!--Optional:-->
              <SPPORD></SPPORD>
           </item>
        </IT_CRDBMEMO_LIST>
     </urn:ZFM_SK_CP_CRDBMEMO>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_cust_crdbmemo_sk&interfaceNamespace=http://cust_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcyMDA5MDEFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzIwMDkwMTU5WjAjBgkqhkiG9w0BCQQxFgQUPlGcwK0D4SGNCDiP%2FfRZdAD%2FMGkwCQYHKoZIzjgEAwQuMCwCFG7Dr8Ar5VCTunA%2FGt4%2FdxQLxYJwAhR6tVTdZ0zjfKjHwv2FvHeOpg7OEQ%3D%3D; JSESSIONID=HGBVz5Z8YvviFyj1rw8juXbgstcaggF-Y2kA_SAPz8r-6aYdcBLzwb_Z5DryUxqa; JSESSIONMARKID=E37f5AGcVK4zrFpZCne8aamvFaOHv--01SkH5jaQA; saplb_*=(J2EE6906720)6906750'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/delivery", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SK_CP_DELIVERY>
        <!--You may enter the following 2 items in any order-->
        <!--Optional:-->
        <IM_CUSTID>`+uname+`</IM_CUSTID>
        <!--Optional:-->
        <IT_DELIVERY_LIST>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <MANDT></MANDT>
              <!--Optional:-->
              <VBELN></VBELN>
              <!--Optional:-->
              <ERNAM></ERNAM>
              <!--Optional:-->
              <ERZET></ERZET>
              <!--Optional:-->
              <ERDAT></ERDAT>
              <!--Optional:-->
              <BZIRK></BZIRK>
              <!--Optional:-->
              <VSTEL></VSTEL>
              <!--Optional:-->
              <VKORG></VKORG>
              <!--Optional:-->
              <LFART></LFART>
              <!--Optional:-->
              <AUTLF></AUTLF>
              <!--Optional:-->
              <KZAZU></KZAZU>
              <!--Optional:-->
              <WADAT></WADAT>
              <!--Optional:-->
              <LDDAT></LDDAT>
              <!--Optional:-->
              <TDDAT></TDDAT>
              <!--Optional:-->
              <LFDAT></LFDAT>
              <!--Optional:-->
              <KODAT></KODAT>
              <!--Optional:-->
              <ABLAD></ABLAD>
              <!--Optional:-->
              <INCO1></INCO1>
              <!--Optional:-->
              <INCO2></INCO2>
              <!--Optional:-->
              <EXPKZ></EXPKZ>
              <!--Optional:-->
              <ROUTE></ROUTE>
              <!--Optional:-->
              <FAKSK></FAKSK>
              <!--Optional:-->
              <LIFSK></LIFSK>
              <!--Optional:-->
              <VBTYP></VBTYP>
              <!--Optional:-->
              <KNFAK></KNFAK>
              <!--Optional:-->
              <TPQUA></TPQUA>
              <!--Optional:-->
              <TPGRP></TPGRP>
              <!--Optional:-->
              <LPRIO></LPRIO>
              <!--Optional:-->
              <VSBED></VSBED>
              <!--Optional:-->
              <KUNNR></KUNNR>
              <!--Optional:-->
              <KUNAG></KUNAG>
              <!--Optional:-->
              <KDGRP></KDGRP>
              <!--Optional:-->
              <STZKL></STZKL>
              <!--Optional:-->
              <STZZU></STZZU>
              <!--Optional:-->
              <BTGEW></BTGEW>
              <!--Optional:-->
              <NTGEW></NTGEW>
              <!--Optional:-->
              <GEWEI></GEWEI>
              <!--Optional:-->
              <VOLUM></VOLUM>
              <!--Optional:-->
              <VOLEH></VOLEH>
              <!--Optional:-->
              <ANZPK></ANZPK>
              <!--Optional:-->
              <BEROT></BEROT>
              <!--Optional:-->
              <LFUHR></LFUHR>
              <!--Optional:-->
              <GRULG></GRULG>
              <!--Optional:-->
              <LSTEL></LSTEL>
              <!--Optional:-->
              <TRAGR></TRAGR>
              <!--Optional:-->
              <FKARV></FKARV>
              <!--Optional:-->
              <FKDAT></FKDAT>
              <!--Optional:-->
              <PERFK></PERFK>
              <!--Optional:-->
              <ROUTA></ROUTA>
              <!--Optional:-->
              <STAFO></STAFO>
              <!--Optional:-->
              <KALSM></KALSM>
              <!--Optional:-->
              <KNUMV></KNUMV>
              <!--Optional:-->
              <WAERK></WAERK>
              <!--Optional:-->
              <VKBUR></VKBUR>
              <!--Optional:-->
              <VBEAK></VBEAK>
              <!--Optional:-->
              <ZUKRL></ZUKRL>
              <!--Optional:-->
              <VERUR></VERUR>
              <!--Optional:-->
              <COMMN></COMMN>
              <!--Optional:-->
              <STWAE></STWAE>
              <!--Optional:-->
              <STCUR></STCUR>
              <!--Optional:-->
              <EXNUM></EXNUM>
              <!--Optional:-->
              <AENAM></AENAM>
              <!--Optional:-->
              <AEDAT></AEDAT>
              <!--Optional:-->
              <LGNUM></LGNUM>
              <!--Optional:-->
              <LISPL></LISPL>
              <!--Optional:-->
              <VKOIV></VKOIV>
              <!--Optional:-->
              <VTWIV></VTWIV>
              <!--Optional:-->
              <SPAIV></SPAIV>
              <!--Optional:-->
              <FKAIV></FKAIV>
              <!--Optional:-->
              <PIOIV></PIOIV>
              <!--Optional:-->
              <FKDIV></FKDIV>
              <!--Optional:-->
              <KUNIV></KUNIV>
              <!--Optional:-->
              <KKBER></KKBER>
              <!--Optional:-->
              <KNKLI></KNKLI>
              <!--Optional:-->
              <GRUPP></GRUPP>
              <!--Optional:-->
              <SBGRP></SBGRP>
              <!--Optional:-->
              <CTLPC></CTLPC>
              <!--Optional:-->
              <CMWAE></CMWAE>
              <!--Optional:-->
              <AMTBL></AMTBL>
              <!--Optional:-->
              <BOLNR></BOLNR>
              <!--Optional:-->
              <LIFNR></LIFNR>
              <!--Optional:-->
              <TRATY></TRATY>
              <!--Optional:-->
              <TRAID></TRAID>
              <!--Optional:-->
              <CMFRE></CMFRE>
              <!--Optional:-->
              <CMNGV></CMNGV>
              <!--Optional:-->
              <XABLN></XABLN>
              <!--Optional:-->
              <BLDAT></BLDAT>
              <!--Optional:-->
              <WADAT_IST></WADAT_IST>
              <!--Optional:-->
              <TRSPG></TRSPG>
              <!--Optional:-->
              <TPSID></TPSID>
              <!--Optional:-->
              <LIFEX></LIFEX>
              <!--Optional:-->
              <TERNR></TERNR>
              <!--Optional:-->
              <KALSM_CH></KALSM_CH>
              <!--Optional:-->
              <KLIEF></KLIEF>
              <!--Optional:-->
              <KALSP></KALSP>
              <!--Optional:-->
              <KNUMP></KNUMP>
              <!--Optional:-->
              <NETWR></NETWR>
              <!--Optional:-->
              <AULWE></AULWE>
              <!--Optional:-->
              <WERKS></WERKS>
              <!--Optional:-->
              <LCNUM></LCNUM>
              <!--Optional:-->
              <ABSSC></ABSSC>
              <!--Optional:-->
              <KOUHR></KOUHR>
              <!--Optional:-->
              <TDUHR></TDUHR>
              <!--Optional:-->
              <LDUHR></LDUHR>
              <!--Optional:-->
              <WAUHR></WAUHR>
              <!--Optional:-->
              <LGTOR></LGTOR>
              <!--Optional:-->
              <LGBZO></LGBZO>
              <!--Optional:-->
              <AKWAE></AKWAE>
              <!--Optional:-->
              <AKKUR></AKKUR>
              <!--Optional:-->
              <AKPRZ></AKPRZ>
              <!--Optional:-->
              <PROLI></PROLI>
              <!--Optional:-->
              <XBLNR></XBLNR>
              <!--Optional:-->
              <HANDLE></HANDLE>
              <!--Optional:-->
              <TSEGFL></TSEGFL>
              <!--Optional:-->
              <TSEGTP></TSEGTP>
              <!--Optional:-->
              <TZONIS></TZONIS>
              <!--Optional:-->
              <TZONRC></TZONRC>
              <!--Optional:-->
              <CONT_DG></CONT_DG>
              <!--Optional:-->
              <VERURSYS></VERURSYS>
              <!--Optional:-->
              <KZWAB></KZWAB>
              <!--Optional:-->
              <VLSTK></VLSTK>
              <!--Optional:-->
              <TCODE></TCODE>
              <!--Optional:-->
              <VSART></VSART>
              <!--Optional:-->
              <TRMTYP></TRMTYP>
              <!--Optional:-->
              <SDABW></SDABW>
              <!--Optional:-->
              <VBUND></VBUND>
              <!--Optional:-->
              <XWOFF></XWOFF>
              <!--Optional:-->
              <DIRTA></DIRTA>
              <!--Optional:-->
              <PRVBE></PRVBE>
              <!--Optional:-->
              <FOLAR></FOLAR>
              <!--Optional:-->
              <PODAT></PODAT>
              <!--Optional:-->
              <POTIM></POTIM>
              <!--Optional:-->
              <VGANZ></VGANZ>
              <!--Optional:-->
              <IMWRK></IMWRK>
              <!--Optional:-->
              <SPE_LOEKZ></SPE_LOEKZ>
              <!--Optional:-->
              <SPE_LOC_SEQ></SPE_LOC_SEQ>
              <!--Optional:-->
              <SPE_ACC_APP_STS></SPE_ACC_APP_STS>
              <!--Optional:-->
              <SPE_SHP_INF_STS></SPE_SHP_INF_STS>
              <!--Optional:-->
              <SPE_RET_CANC></SPE_RET_CANC>
              <!--Optional:-->
              <SPE_WAUHR_IST></SPE_WAUHR_IST>
              <!--Optional:-->
              <SPE_WAZONE_IST></SPE_WAZONE_IST>
              <!--Optional:-->
              <SPE_REV_VLSTK></SPE_REV_VLSTK>
              <!--Optional:-->
              <SPE_LE_SCENARIO></SPE_LE_SCENARIO>
              <!--Optional:-->
              <SPE_ORIG_SYS></SPE_ORIG_SYS>
              <!--Optional:-->
              <SPE_CHNG_SYS></SPE_CHNG_SYS>
              <!--Optional:-->
              <SPE_GEOROUTE></SPE_GEOROUTE>
              <!--Optional:-->
              <SPE_GEOROUTEIND></SPE_GEOROUTEIND>
              <!--Optional:-->
              <SPE_CARRIER_IND></SPE_CARRIER_IND>
              <!--Optional:-->
              <SPE_GTS_REL></SPE_GTS_REL>
              <!--Optional:-->
              <SPE_GTS_RT_CDE></SPE_GTS_RT_CDE>
              <!--Optional:-->
              <SPE_REL_TMSTMP></SPE_REL_TMSTMP>
              <!--Optional:-->
              <SPE_UNIT_SYSTEM></SPE_UNIT_SYSTEM>
              <!--Optional:-->
              <SPE_INV_BFR_GI></SPE_INV_BFR_GI>
              <!--Optional:-->
              <SPE_QI_STATUS></SPE_QI_STATUS>
              <!--Optional:-->
              <SPE_RED_IND></SPE_RED_IND>
              <!--Optional:-->
              <SAKES></SAKES>
              <!--Optional:-->
              <SPE_LIFEX_TYPE></SPE_LIFEX_TYPE>
              <!--Optional:-->
              <SPE_TTYPE></SPE_TTYPE>
              <!--Optional:-->
              <INCOV></INCOV>
              <!--Optional:-->
              <INCO2_L></INCO2_L>
              <!--Optional:-->
              <INCO3_L></INCO3_L>
              <!--Optional:-->
              <TRMTYP_LONG></TRMTYP_LONG>
              <!--Optional:-->
              <VBTYP_LONG></VBTYP_LONG>
           </item>
        </IT_DELIVERY_LIST>
     </urn:ZFM_SK_CP_DELIVERY>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_cust_delivery_sk&interfaceNamespace=http://cust_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcyMDA5MDEFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzIwMDkwMTU5WjAjBgkqhkiG9w0BCQQxFgQUPlGcwK0D4SGNCDiP%2FfRZdAD%2FMGkwCQYHKoZIzjgEAwQuMCwCFG7Dr8Ar5VCTunA%2FGt4%2FdxQLxYJwAhR6tVTdZ0zjfKjHwv2FvHeOpg7OEQ%3D%3D; JSESSIONID=HGBVz5Z8YvviFyj1rw8juXbgstcaggF-Y2kA_SAPz8r-6aYdcBLzwb_Z5DryUxqa; JSESSIONMARKID=ZNp6igOeN-n_r0z09lmjf6VeI0WHooy0-PkH5jaQA; saplb_*=(J2EE6906720)6906750'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/invoice", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SK_CP_INVOICE>
        <!--You may enter the following 2 items in any order-->
        <!--Optional:-->
        <IM_CUSTID>`+uname+`</IM_CUSTID>
        <!--Optional:-->
        <IT_INVOICE_LIST>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <MANDT></MANDT>
              <!--Optional:-->
              <VBELN></VBELN>
              <!--Optional:-->
              <FKART></FKART>
              <!--Optional:-->
              <FKTYP></FKTYP>
              <!--Optional:-->
              <VBTYP></VBTYP>
              <!--Optional:-->
              <WAERK></WAERK>
              <!--Optional:-->
              <VKORG></VKORG>
              <!--Optional:-->
              <VTWEG></VTWEG>
              <!--Optional:-->
              <KALSM></KALSM>
              <!--Optional:-->
              <KNUMV></KNUMV>
              <!--Optional:-->
              <VSBED></VSBED>
              <!--Optional:-->
              <FKDAT></FKDAT>
              <!--Optional:-->
              <BELNR></BELNR>
              <!--Optional:-->
              <GJAHR></GJAHR>
              <!--Optional:-->
              <POPER></POPER>
              <!--Optional:-->
              <KONDA></KONDA>
              <!--Optional:-->
              <KDGRP></KDGRP>
              <!--Optional:-->
              <BZIRK></BZIRK>
              <!--Optional:-->
              <PLTYP></PLTYP>
              <!--Optional:-->
              <INCO1></INCO1>
              <!--Optional:-->
              <INCO2></INCO2>
              <!--Optional:-->
              <EXPKZ></EXPKZ>
              <!--Optional:-->
              <RFBSK></RFBSK>
              <!--Optional:-->
              <MRNKZ></MRNKZ>
              <!--Optional:-->
              <KURRF></KURRF>
              <!--Optional:-->
              <CPKUR></CPKUR>
              <!--Optional:-->
              <VALTG></VALTG>
              <!--Optional:-->
              <VALDT></VALDT>
              <!--Optional:-->
              <ZTERM></ZTERM>
              <!--Optional:-->
              <ZLSCH></ZLSCH>
              <!--Optional:-->
              <KTGRD></KTGRD>
              <!--Optional:-->
              <LAND1></LAND1>
              <!--Optional:-->
              <REGIO></REGIO>
              <!--Optional:-->
              <COUNC></COUNC>
              <!--Optional:-->
              <CITYC></CITYC>
              <!--Optional:-->
              <BUKRS></BUKRS>
              <!--Optional:-->
              <TAXK1></TAXK1>
              <!--Optional:-->
              <TAXK2></TAXK2>
              <!--Optional:-->
              <TAXK3></TAXK3>
              <!--Optional:-->
              <TAXK4></TAXK4>
              <!--Optional:-->
              <TAXK5></TAXK5>
              <!--Optional:-->
              <TAXK6></TAXK6>
              <!--Optional:-->
              <TAXK7></TAXK7>
              <!--Optional:-->
              <TAXK8></TAXK8>
              <!--Optional:-->
              <TAXK9></TAXK9>
              <!--Optional:-->
              <NETWR></NETWR>
              <!--Optional:-->
              <ZUKRI></ZUKRI>
              <!--Optional:-->
              <ERNAM></ERNAM>
              <!--Optional:-->
              <ERZET></ERZET>
              <!--Optional:-->
              <ERDAT></ERDAT>
              <!--Optional:-->
              <STAFO></STAFO>
              <!--Optional:-->
              <KUNRG></KUNRG>
              <!--Optional:-->
              <KUNAG></KUNAG>
              <!--Optional:-->
              <MABER></MABER>
              <!--Optional:-->
              <STWAE></STWAE>
              <!--Optional:-->
              <EXNUM></EXNUM>
              <!--Optional:-->
              <STCEG></STCEG>
              <!--Optional:-->
              <AEDAT></AEDAT>
              <!--Optional:-->
              <SFAKN></SFAKN>
              <!--Optional:-->
              <KNUMA></KNUMA>
              <!--Optional:-->
              <FKART_RL></FKART_RL>
              <!--Optional:-->
              <FKDAT_RL></FKDAT_RL>
              <!--Optional:-->
              <KURST></KURST>
              <!--Optional:-->
              <MSCHL></MSCHL>
              <!--Optional:-->
              <MANSP></MANSP>
              <!--Optional:-->
              <SPART></SPART>
              <!--Optional:-->
              <KKBER></KKBER>
              <!--Optional:-->
              <KNKLI></KNKLI>
              <!--Optional:-->
              <CMWAE></CMWAE>
              <!--Optional:-->
              <CMKUF></CMKUF>
              <!--Optional:-->
              <HITYP_PR></HITYP_PR>
              <!--Optional:-->
              <BSTNK_VF></BSTNK_VF>
              <!--Optional:-->
              <VBUND></VBUND>
              <!--Optional:-->
              <FKART_AB></FKART_AB>
              <!--Optional:-->
              <KAPPL></KAPPL>
              <!--Optional:-->
              <LANDTX></LANDTX>
              <!--Optional:-->
              <STCEG_H></STCEG_H>
              <!--Optional:-->
              <STCEG_L></STCEG_L>
              <!--Optional:-->
              <XBLNR></XBLNR>
              <!--Optional:-->
              <ZUONR></ZUONR>
              <!--Optional:-->
              <MWSBK></MWSBK>
              <!--Optional:-->
              <LOGSYS></LOGSYS>
              <!--Optional:-->
              <FKSTO></FKSTO>
              <!--Optional:-->
              <XEGDR></XEGDR>
              <!--Optional:-->
              <RPLNR></RPLNR>
              <!--Optional:-->
              <LCNUM></LCNUM>
              <!--Optional:-->
              <J_1AFITP></J_1AFITP>
              <!--Optional:-->
              <KURRF_DAT></KURRF_DAT>
              <!--Optional:-->
              <AKWAE></AKWAE>
              <!--Optional:-->
              <AKKUR></AKKUR>
              <!--Optional:-->
              <KIDNO></KIDNO>
              <!--Optional:-->
              <BVTYP></BVTYP>
              <!--Optional:-->
              <NUMPG></NUMPG>
              <!--Optional:-->
              <BUPLA></BUPLA>
              <!--Optional:-->
              <VKONT></VKONT>
              <!--Optional:-->
              <FKK_DOCSTAT></FKK_DOCSTAT>
              <!--Optional:-->
              <NRZAS></NRZAS>
              <!--Optional:-->
              <SPE_BILLING_IND></SPE_BILLING_IND>
              <!--Optional:-->
              <VTREF></VTREF>
              <!--Optional:-->
              <FK_SOURCE_SYS></FK_SOURCE_SYS>
              <!--Optional:-->
              <FKTYP_CRM></FKTYP_CRM>
              <!--Optional:-->
              <STGRD></STGRD>
              <!--Optional:-->
              <VBTYP_EXT></VBTYP_EXT>
              <!--Optional:-->
              <J_1TPBUPL></J_1TPBUPL>
              <!--Optional:-->
              <INCOV></INCOV>
              <!--Optional:-->
              <INCO2_L></INCO2_L>
              <!--Optional:-->
              <INCO3_L></INCO3_L>
              <!--Optional:-->
              <DPC_REL></DPC_REL>
              <!--Optional:-->
              <MNDID></MNDID>
              <!--Optional:-->
              <PAY_TYPE></PAY_TYPE>
              <!--Optional:-->
              <SEPON></SEPON>
              <!--Optional:-->
              <MNDVG></MNDVG>
              <!--Optional:-->
              <SPPAYM></SPPAYM>
              <!--Optional:-->
              <SPPORD></SPPORD>
           </item>
        </IT_INVOICE_LIST>
     </urn:ZFM_SK_CP_INVOICE>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_cust_invoice_sk&interfaceNamespace=http://cust_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcyMDA5MDEFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzIwMDkwMTU5WjAjBgkqhkiG9w0BCQQxFgQUPlGcwK0D4SGNCDiP%2FfRZdAD%2FMGkwCQYHKoZIzjgEAwQuMCwCFG7Dr8Ar5VCTunA%2FGt4%2FdxQLxYJwAhR6tVTdZ0zjfKjHwv2FvHeOpg7OEQ%3D%3D; JSESSIONID=HGBVz5Z8YvviFyj1rw8juXbgstcaggF-Y2kA_SAPz8r-6aYdcBLzwb_Z5DryUxqa; JSESSIONMARKID=ZNp6igOeN-n_r0z09lmjf6VeI0WHooy0-PkH5jaQA; saplb_*=(J2EE6906720)6906750'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/paymentsaging", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SK_CP_PAYMENTAGE>
        <!--You may enter the following 3 items in any order-->
        <!--Optional:-->
        <IM_COMPANY_CODE>0001</IM_COMPANY_CODE>
        <!--Optional:-->
        <IM_CUSTID>`+uname+`</IM_CUSTID>
        <!--Optional:-->
        <IT_PAYMENT_LIST>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <COMP_CODE></COMP_CODE>
              <!--Optional:-->
              <CUSTOMER></CUSTOMER>
              <!--Optional:-->
              <SP_GL_IND></SP_GL_IND>
              <!--Optional:-->
              <CLEAR_DATE></CLEAR_DATE>
              <!--Optional:-->
              <CLR_DOC_NO></CLR_DOC_NO>
              <!--Optional:-->
              <ALLOC_NMBR></ALLOC_NMBR>
              <!--Optional:-->
              <FISC_YEAR></FISC_YEAR>
              <!--Optional:-->
              <DOC_NO></DOC_NO>
              <!--Optional:-->
              <ITEM_NUM></ITEM_NUM>
              <!--Optional:-->
              <PSTNG_DATE></PSTNG_DATE>
              <!--Optional:-->
              <DOC_DATE></DOC_DATE>
              <!--Optional:-->
              <ENTRY_DATE></ENTRY_DATE>
              <!--Optional:-->
              <CURRENCY></CURRENCY>
              <!--Optional:-->
              <LOC_CURRCY></LOC_CURRCY>
              <!--Optional:-->
              <REF_DOC_NO></REF_DOC_NO>
              <!--Optional:-->
              <DOC_TYPE></DOC_TYPE>
              <!--Optional:-->
              <FIS_PERIOD></FIS_PERIOD>
              <!--Optional:-->
              <POST_KEY></POST_KEY>
              <!--Optional:-->
              <DB_CR_IND></DB_CR_IND>
              <!--Optional:-->
              <BUS_AREA></BUS_AREA>
              <!--Optional:-->
              <TAX_CODE></TAX_CODE>
              <!--Optional:-->
              <LC_AMOUNT></LC_AMOUNT>
              <!--Optional:-->
              <AMT_DOCCUR></AMT_DOCCUR>
              <!--Optional:-->
              <LC_TAX></LC_TAX>
              <!--Optional:-->
              <TX_DOC_CUR></TX_DOC_CUR>
              <!--Optional:-->
              <ITEM_TEXT></ITEM_TEXT>
              <!--Optional:-->
              <BRANCH></BRANCH>
              <!--Optional:-->
              <BLINE_DATE></BLINE_DATE>
              <!--Optional:-->
              <PMNTTRMS></PMNTTRMS>
              <!--Optional:-->
              <DSCT_DAYS1></DSCT_DAYS1>
              <!--Optional:-->
              <DSCT_DAYS2></DSCT_DAYS2>
              <!--Optional:-->
              <NETTERMS></NETTERMS>
              <!--Optional:-->
              <DSCT_PCT1></DSCT_PCT1>
              <!--Optional:-->
              <DSCT_PCT2></DSCT_PCT2>
              <!--Optional:-->
              <DISC_BASE></DISC_BASE>
              <!--Optional:-->
              <DSC_AMT_LC></DSC_AMT_LC>
              <!--Optional:-->
              <DSC_AMT_DC></DSC_AMT_DC>
              <!--Optional:-->
              <PYMT_METH></PYMT_METH>
              <!--Optional:-->
              <PMNT_BLOCK></PMNT_BLOCK>
              <!--Optional:-->
              <FIXEDTERMS></FIXEDTERMS>
              <!--Optional:-->
              <INV_REF></INV_REF>
              <!--Optional:-->
              <INV_YEAR></INV_YEAR>
              <!--Optional:-->
              <INV_ITEM></INV_ITEM>
              <!--Optional:-->
              <DUNN_BLOCK></DUNN_BLOCK>
              <!--Optional:-->
              <DUNN_KEY></DUNN_KEY>
              <!--Optional:-->
              <LAST_DUNN></LAST_DUNN>
              <!--Optional:-->
              <DUNN_LEVEL></DUNN_LEVEL>
              <!--Optional:-->
              <DUNN_AREA></DUNN_AREA>
              <!--Optional:-->
              <DOC_STATUS></DOC_STATUS>
              <!--Optional:-->
              <NXT_DOCTYP></NXT_DOCTYP>
              <!--Optional:-->
              <VAT_REG_NO></VAT_REG_NO>
              <!--Optional:-->
              <REASON_CDE></REASON_CDE>
              <!--Optional:-->
              <PMTMTHSUPL></PMTMTHSUPL>
              <!--Optional:-->
              <REF_KEY_1></REF_KEY_1>
              <!--Optional:-->
              <REF_KEY_2></REF_KEY_2>
              <!--Optional:-->
              <T_CURRENCY></T_CURRENCY>
              <!--Optional:-->
              <AMOUNT></AMOUNT>
              <!--Optional:-->
              <NET_AMOUNT></NET_AMOUNT>
              <!--Optional:-->
              <NAME></NAME>
              <!--Optional:-->
              <NAME_2></NAME_2>
              <!--Optional:-->
              <NAME_3></NAME_3>
              <!--Optional:-->
              <NAME_4></NAME_4>
              <!--Optional:-->
              <POSTL_CODE></POSTL_CODE>
              <!--Optional:-->
              <CITY></CITY>
              <!--Optional:-->
              <COUNTRY></COUNTRY>
              <!--Optional:-->
              <STREET></STREET>
              <!--Optional:-->
              <PO_BOX></PO_BOX>
              <!--Optional:-->
              <POBX_PCD></POBX_PCD>
              <!--Optional:-->
              <POBK_CURAC></POBK_CURAC>
              <!--Optional:-->
              <BANK_ACCT></BANK_ACCT>
              <!--Optional:-->
              <BANK_KEY></BANK_KEY>
              <!--Optional:-->
              <BANK_CTRY></BANK_CTRY>
              <!--Optional:-->
              <TAX_NO_1></TAX_NO_1>
              <!--Optional:-->
              <TAX_NO_2></TAX_NO_2>
              <!--Optional:-->
              <TAX></TAX>
              <!--Optional:-->
              <EQUAL_TAX></EQUAL_TAX>
              <!--Optional:-->
              <REGION></REGION>
              <!--Optional:-->
              <CTRL_KEY></CTRL_KEY>
              <!--Optional:-->
              <INSTR_KEY></INSTR_KEY>
              <!--Optional:-->
              <PAYEE_CODE></PAYEE_CODE>
              <!--Optional:-->
              <LANGU></LANGU>
              <!--Optional:-->
              <BILL_LIFE></BILL_LIFE>
              <!--Optional:-->
              <BE_TAXCODE></BE_TAXCODE>
              <!--Optional:-->
              <BILLTAX_LC></BILLTAX_LC>
              <!--Optional:-->
              <BILLTAX_FC></BILLTAX_FC>
              <!--Optional:-->
              <LC_COL_CHG></LC_COL_CHG>
              <!--Optional:-->
              <COLL_CHARG></COLL_CHARG>
              <!--Optional:-->
              <CHGS_TX_CD></CHGS_TX_CD>
              <!--Optional:-->
              <ISSUE_DATE></ISSUE_DATE>
              <!--Optional:-->
              <USAGEDATE></USAGEDATE>
              <!--Optional:-->
              <BILL_USAGE></BILL_USAGE>
              <!--Optional:-->
              <DOMICILE></DOMICILE>
              <!--Optional:-->
              <DRAWER></DRAWER>
              <!--Optional:-->
              <CTRBNK_LOC></CTRBNK_LOC>
              <!--Optional:-->
              <DRAW_CITY1></DRAW_CITY1>
              <!--Optional:-->
              <DRAWEE></DRAWEE>
              <!--Optional:-->
              <DRAW_CITY2></DRAW_CITY2>
              <!--Optional:-->
              <DISCT_DAYS></DISCT_DAYS>
              <!--Optional:-->
              <DISCT_RATE></DISCT_RATE>
              <!--Optional:-->
              <ACCEPTED></ACCEPTED>
              <!--Optional:-->
              <BILLSTATUS></BILLSTATUS>
              <!--Optional:-->
              <PRTEST_IND></PRTEST_IND>
              <!--Optional:-->
              <BE_DEMAND></BE_DEMAND>
              <!--Optional:-->
              <OBJ_TYPE></OBJ_TYPE>
              <!--Optional:-->
              <REF_DOC></REF_DOC>
              <!--Optional:-->
              <REF_ORG_UN></REF_ORG_UN>
              <!--Optional:-->
              <REVERSAL_DOC></REVERSAL_DOC>
              <!--Optional:-->
              <SP_GL_TYPE></SP_GL_TYPE>
              <!--Optional:-->
              <NEG_POSTNG></NEG_POSTNG>
              <!--Optional:-->
              <REF_DOC_NO_LONG></REF_DOC_NO_LONG>
              <!--Optional:-->
              <BILL_DOC></BILL_DOC>
           </item>
        </IT_PAYMENT_LIST>
     </urn:ZFM_SK_CP_PAYMENTAGE>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_cust_paymentage_sk&interfaceNamespace=http://cust_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcyMjA4MzcFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzIyMDgzNzEwWjAjBgkqhkiG9w0BCQQxFgQUqI6cA5UsUmzDra7sppDMYU!jSEAwCQYHKoZIzjgEAwQuMCwCFBlNxWqlwFYvoqXcjAPRyl!JYWdsAhQccRDMgEszibvMP1ya!z!T8IaUVg%3D%3D; JSESSIONID=7oR2oZQSRV_xb_Y4ASD6qyXyrg0lggF-Y2kA_SAPjSUWVspmGNLKs25_Zb1VsWRz; JSESSIONMARKID=4TkJVggxwefsFlmlsvGSdWbTTErGaf8szfJn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/profile", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SK_CP_PROFILE>
        <!--Optional:-->
        <I_CUSTID>`+uname+`</I_CUSTID>
     </urn:ZFM_SK_CP_PROFILE>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_cust_profile_sk&interfaceNamespace=http://cust_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcyMDA5MDEFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzIwMDkwMTU5WjAjBgkqhkiG9w0BCQQxFgQUPlGcwK0D4SGNCDiP%2FfRZdAD%2FMGkwCQYHKoZIzjgEAwQuMCwCFG7Dr8Ar5VCTunA%2FGt4%2FdxQLxYJwAhR6tVTdZ0zjfKjHwv2FvHeOpg7OEQ%3D%3D; JSESSIONID=HGBVz5Z8YvviFyj1rw8juXbgstcaggF-Y2kA_SAPz8r-6aYdcBLzwb_Z5DryUxqa; JSESSIONMARKID=ZNp6igOeN-n_r0z09lmjf6VeI0WHooy0-PkH5jaQA; saplb_*=(J2EE6906720)6906750'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/saleorder", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SK_CP_SALEORDER>
        <!--You may enter the following 3 items in any order-->
        <!--Optional:-->
        <IM_CUSTID>`+uname+`</IM_CUSTID>
        <!--Optional:-->
        <IM_SALES_ORG></IM_SALES_ORG>
        <!--Optional:-->
        <IT_SALES_ORDERS>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <SD_DOC></SD_DOC>
              <!--Optional:-->
              <ITM_NUMBER></ITM_NUMBER>
              <!--Optional:-->
              <MATERIAL></MATERIAL>
              <!--Optional:-->
              <SHORT_TEXT></SHORT_TEXT>
              <!--Optional:-->
              <DOC_TYPE></DOC_TYPE>
              <!--Optional:-->
              <DOC_DATE></DOC_DATE>
              <!--Optional:-->
              <REQ_QTY></REQ_QTY>
              <!--Optional:-->
              <REQ_DATE></REQ_DATE>
              <!--Optional:-->
              <PURCH_NO></PURCH_NO>
              <!--Optional:-->
              <BATCH></BATCH>
              <!--Optional:-->
              <VALID_FROM></VALID_FROM>
              <!--Optional:-->
              <VALID_TO></VALID_TO>
              <!--Optional:-->
              <BILL_BLOCK></BILL_BLOCK>
              <!--Optional:-->
              <DLV_BLOCK></DLV_BLOCK>
              <!--Optional:-->
              <SOLD_TO></SOLD_TO>
              <!--Optional:-->
              <NAME></NAME>
              <!--Optional:-->
              <EXCHG_RATE></EXCHG_RATE>
              <!--Optional:-->
              <DLV_QTY></DLV_QTY>
              <!--Optional:-->
              <BASE_UOM></BASE_UOM>
              <!--Optional:-->
              <NET_PRICE></NET_PRICE>
              <!--Optional:-->
              <COND_P_UNT></COND_P_UNT>
              <!--Optional:-->
              <COND_UNIT></COND_UNIT>
              <!--Optional:-->
              <NET_VAL_HD></NET_VAL_HD>
              <!--Optional:-->
              <NET_VALUE></NET_VALUE>
              <!--Optional:-->
              <DIVISION></DIVISION>
              <!--Optional:-->
              <DOC_STATUS></DOC_STATUS>
              <!--Optional:-->
              <SALES_GRP></SALES_GRP>
              <!--Optional:-->
              <SALES_OFF></SALES_OFF>
              <!--Optional:-->
              <SALES_ORG></SALES_ORG>
              <!--Optional:-->
              <SALES_UNIT></SALES_UNIT>
              <!--Optional:-->
              <SHIP_POINT></SHIP_POINT>
              <!--Optional:-->
              <DISTR_CHAN></DISTR_CHAN>
              <!--Optional:-->
              <GI_DATE></GI_DATE>
              <!--Optional:-->
              <CURRENCY></CURRENCY>
              <!--Optional:-->
              <PLANT></PLANT>
              <!--Optional:-->
              <STORE_LOC></STORE_LOC>
              <!--Optional:-->
              <ORD_REASON></ORD_REASON>
              <!--Optional:-->
              <REASON_REJ></REASON_REJ>
              <!--Optional:-->
              <B_UOM_ISO></B_UOM_ISO>
              <!--Optional:-->
              <CD_UNT_ISO></CD_UNT_ISO>
              <!--Optional:-->
              <S_UNIT_ISO></S_UNIT_ISO>
              <!--Optional:-->
              <CURR_ISO></CURR_ISO>
              <!--Optional:-->
              <PURCH_NO_C></PURCH_NO_C>
              <!--Optional:-->
              <EXCHG_RATE_V></EXCHG_RATE_V>
              <!--Optional:-->
              <MAT_EXT></MAT_EXT>
              <!--Optional:-->
              <MAT_GUID></MAT_GUID>
              <!--Optional:-->
              <MAT_VERS></MAT_VERS>
              <!--Optional:-->
              <CREATION_DATE></CREATION_DATE>
              <!--Optional:-->
              <CREATION_TIME></CREATION_TIME>
              <!--Optional:-->
              <STATUS_DOC></STATUS_DOC>
              <!--Optional:-->
              <REQ_SEGMENT></REQ_SEGMENT>
              <!--Optional:-->
              <MATERIAL_LONG></MATERIAL_LONG>
           </item>
        </IT_SALES_ORDERS>
     </urn:ZFM_SK_CP_SALEORDER>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_cust_saleorder_sk&interfaceNamespace=http://cust_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcyMDA5MDEFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzIwMDkwMTU5WjAjBgkqhkiG9w0BCQQxFgQUPlGcwK0D4SGNCDiP%2FfRZdAD%2FMGkwCQYHKoZIzjgEAwQuMCwCFG7Dr8Ar5VCTunA%2FGt4%2FdxQLxYJwAhR6tVTdZ0zjfKjHwv2FvHeOpg7OEQ%3D%3D; JSESSIONID=HGBVz5Z8YvviFyj1rw8juXbgstcaggF-Y2kA_SAPz8r-6aYdcBLzwb_Z5DryUxqa; JSESSIONMARKID=ZNp6igOeN-n_r0z09lmjf6VeI0WHooy0-PkH5jaQA; saplb_*=(J2EE6906720)6906750'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/vend_credit", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_CRED_SK>
        <!--You may enter the following 2 items in any order-->
        <VEN_NO>`+uname+`</VEN_NO>
        <!--Optional:-->
        <RESULT>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <COMP_CODE></COMP_CODE>
              <!--Optional:-->
              <VENDOR></VENDOR>
              <!--Optional:-->
              <SP_GL_IND></SP_GL_IND>
              <!--Optional:-->
              <CLEAR_DATE></CLEAR_DATE>
              <!--Optional:-->
              <CLR_DOC_NO></CLR_DOC_NO>
              <!--Optional:-->
              <ALLOC_NMBR></ALLOC_NMBR>
              <!--Optional:-->
              <FISC_YEAR></FISC_YEAR>
              <!--Optional:-->
              <DOC_NO></DOC_NO>
              <!--Optional:-->
              <ITEM_NUM></ITEM_NUM>
              <!--Optional:-->
              <PSTNG_DATE></PSTNG_DATE>
              <!--Optional:-->
              <DOC_DATE></DOC_DATE>
              <!--Optional:-->
              <ENTRY_DATE></ENTRY_DATE>
              <!--Optional:-->
              <CURRENCY></CURRENCY>
              <!--Optional:-->
              <LOC_CURRCY></LOC_CURRCY>
              <!--Optional:-->
              <REF_DOC_NO></REF_DOC_NO>
              <!--Optional:-->
              <DOC_TYPE></DOC_TYPE>
              <!--Optional:-->
              <FIS_PERIOD></FIS_PERIOD>
              <!--Optional:-->
              <POST_KEY></POST_KEY>
              <!--Optional:-->
              <DB_CR_IND></DB_CR_IND>
              <!--Optional:-->
              <BUS_AREA></BUS_AREA>
              <!--Optional:-->
              <TAX_CODE></TAX_CODE>
              <!--Optional:-->
              <LC_AMOUNT></LC_AMOUNT>
              <!--Optional:-->
              <AMT_DOCCUR></AMT_DOCCUR>
              <!--Optional:-->
              <LC_TAX></LC_TAX>
              <!--Optional:-->
              <TX_DOC_CUR></TX_DOC_CUR>
              <!--Optional:-->
              <ITEM_TEXT></ITEM_TEXT>
              <!--Optional:-->
              <BRANCH></BRANCH>
              <!--Optional:-->
              <BLINE_DATE></BLINE_DATE>
              <!--Optional:-->
              <PMNTTRMS></PMNTTRMS>
              <!--Optional:-->
              <DSCT_DAYS1></DSCT_DAYS1>
              <!--Optional:-->
              <DSCT_DAYS2></DSCT_DAYS2>
              <!--Optional:-->
              <NETTERMS></NETTERMS>
              <!--Optional:-->
              <DSCT_PCT1></DSCT_PCT1>
              <!--Optional:-->
              <DSCT_PCT2></DSCT_PCT2>
              <!--Optional:-->
              <DISC_BASE></DISC_BASE>
              <!--Optional:-->
              <DSC_AMT_LC></DSC_AMT_LC>
              <!--Optional:-->
              <DSC_AMT_DC></DSC_AMT_DC>
              <!--Optional:-->
              <PYMT_METH></PYMT_METH>
              <!--Optional:-->
              <PMNT_BLOCK></PMNT_BLOCK>
              <!--Optional:-->
              <FIXEDTERMS></FIXEDTERMS>
              <!--Optional:-->
              <INV_REF></INV_REF>
              <!--Optional:-->
              <INV_YEAR></INV_YEAR>
              <!--Optional:-->
              <INV_ITEM></INV_ITEM>
              <!--Optional:-->
              <DUNN_BLOCK></DUNN_BLOCK>
              <!--Optional:-->
              <DUNN_KEY></DUNN_KEY>
              <!--Optional:-->
              <LAST_DUNN></LAST_DUNN>
              <!--Optional:-->
              <DUNN_LEVEL></DUNN_LEVEL>
              <!--Optional:-->
              <DUNN_AREA></DUNN_AREA>
              <!--Optional:-->
              <W_TAX_CODE></W_TAX_CODE>
              <!--Optional:-->
              <W_TAX_BASE></W_TAX_BASE>
              <!--Optional:-->
              <WI_TAX_AMT></WI_TAX_AMT>
              <!--Optional:-->
              <DOC_STATUS></DOC_STATUS>
              <!--Optional:-->
              <NXT_DOCTYP></NXT_DOCTYP>
              <!--Optional:-->
              <VAT_REG_NO></VAT_REG_NO>
              <!--Optional:-->
              <EXEMPT_NO></EXEMPT_NO>
              <!--Optional:-->
              <W_TAX_EXPT></W_TAX_EXPT>
              <!--Optional:-->
              <REASON_CDE></REASON_CDE>
              <!--Optional:-->
              <PMTMTHSUPL></PMTMTHSUPL>
              <!--Optional:-->
              <REF_KEY_1></REF_KEY_1>
              <!--Optional:-->
              <REF_KEY_2></REF_KEY_2>
              <!--Optional:-->
              <T_CURRENCY></T_CURRENCY>
              <!--Optional:-->
              <AMOUNT></AMOUNT>
              <!--Optional:-->
              <NET_AMOUNT></NET_AMOUNT>
              <!--Optional:-->
              <NAME></NAME>
              <!--Optional:-->
              <NAME_2></NAME_2>
              <!--Optional:-->
              <NAME_3></NAME_3>
              <!--Optional:-->
              <NAME_4></NAME_4>
              <!--Optional:-->
              <POSTL_CODE></POSTL_CODE>
              <!--Optional:-->
              <CITY></CITY>
              <!--Optional:-->
              <COUNTRY></COUNTRY>
              <!--Optional:-->
              <STREET></STREET>
              <!--Optional:-->
              <PO_BOX></PO_BOX>
              <!--Optional:-->
              <POBX_PCD></POBX_PCD>
              <!--Optional:-->
              <POBK_CURAC></POBK_CURAC>
              <!--Optional:-->
              <BANK_ACCT></BANK_ACCT>
              <!--Optional:-->
              <BANK_KEY></BANK_KEY>
              <!--Optional:-->
              <BANK_CTRY></BANK_CTRY>
              <!--Optional:-->
              <TAX_NO_1></TAX_NO_1>
              <!--Optional:-->
              <TAX_NO_2></TAX_NO_2>
              <!--Optional:-->
              <TAX></TAX>
              <!--Optional:-->
              <EQUAL_TAX></EQUAL_TAX>
              <!--Optional:-->
              <REGION></REGION>
              <!--Optional:-->
              <CTRL_KEY></CTRL_KEY>
              <!--Optional:-->
              <INSTR_KEY></INSTR_KEY>
              <!--Optional:-->
              <PAYEE_CODE></PAYEE_CODE>
              <!--Optional:-->
              <LANGU></LANGU>
              <!--Optional:-->
              <BILL_LIFE></BILL_LIFE>
              <!--Optional:-->
              <BE_TAXCODE></BE_TAXCODE>
              <!--Optional:-->
              <BILLTAX_LC></BILLTAX_LC>
              <!--Optional:-->
              <BILLTAX_FC></BILLTAX_FC>
              <!--Optional:-->
              <LC_COL_CHG></LC_COL_CHG>
              <!--Optional:-->
              <COLL_CHARG></COLL_CHARG>
              <!--Optional:-->
              <CHGS_TX_CD></CHGS_TX_CD>
              <!--Optional:-->
              <ISSUE_DATE></ISSUE_DATE>
              <!--Optional:-->
              <USAGEDATE></USAGEDATE>
              <!--Optional:-->
              <BILL_USAGE></BILL_USAGE>
              <!--Optional:-->
              <DOMICILE></DOMICILE>
              <!--Optional:-->
              <DRAWER></DRAWER>
              <!--Optional:-->
              <CTRBNK_LOC></CTRBNK_LOC>
              <!--Optional:-->
              <DRAW_CITY1></DRAW_CITY1>
              <!--Optional:-->
              <DRAWEE></DRAWEE>
              <!--Optional:-->
              <DRAW_CITY2></DRAW_CITY2>
              <!--Optional:-->
              <DISCT_DAYS></DISCT_DAYS>
              <!--Optional:-->
              <DISCT_RATE></DISCT_RATE>
              <!--Optional:-->
              <ACCEPTED></ACCEPTED>
              <!--Optional:-->
              <BILLSTATUS></BILLSTATUS>
              <!--Optional:-->
              <PRTEST_IND></PRTEST_IND>
              <!--Optional:-->
              <BE_DEMAND></BE_DEMAND>
              <!--Optional:-->
              <OBJ_TYPE></OBJ_TYPE>
              <!--Optional:-->
              <REF_DOC></REF_DOC>
              <!--Optional:-->
              <REF_ORG_UN></REF_ORG_UN>
              <!--Optional:-->
              <REVERSAL_DOC></REVERSAL_DOC>
              <!--Optional:-->
              <SP_GL_TYPE></SP_GL_TYPE>
              <!--Optional:-->
              <NEG_POSTNG></NEG_POSTNG>
              <!--Optional:-->
              <REF_DOC_NO_LONG></REF_DOC_NO_LONG>
           </item>
        </RESULT>
     </urn:ZFM_VEN_CRED_SK>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_vend_cred_sk&interfaceNamespace=http://vend_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/vend_detail", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_DETAIL_SK>
        <!--You may enter the following 3 items in any order-->
        <VEN_NO>`+uname+`</VEN_NO>
        <!--Optional:-->
        <ET_BANKDETAIL>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <VENDOR></VENDOR>
              <!--Optional:-->
              <BANK_CTRY></BANK_CTRY>
              <!--Optional:-->
              <BANK_KEY></BANK_KEY>
              <!--Optional:-->
              <BANK_ACCT></BANK_ACCT>
              <!--Optional:-->
              <CTRL_KEY></CTRL_KEY>
              <!--Optional:-->
              <PARTNER_BK></PARTNER_BK>
              <!--Optional:-->
              <COLL_AUTH></COLL_AUTH>
              <!--Optional:-->
              <BANK_REF></BANK_REF>
           </item>
        </ET_BANKDETAIL>
        <!--Optional:-->
        <ET_VENDORIBANDETAIL>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <VENDOR></VENDOR>
              <!--Optional:-->
              <BANK_CTRY></BANK_CTRY>
              <!--Optional:-->
              <BANK_KEY></BANK_KEY>
              <!--Optional:-->
              <BANK_ACCT></BANK_ACCT>
              <!--Optional:-->
              <CTRL_KEY></CTRL_KEY>
              <!--Optional:-->
              <IBAN></IBAN>
              <!--Optional:-->
              <VALID_FROM></VALID_FROM>
              <!--Optional:-->
              <DUMMY></DUMMY>
           </item>
        </ET_VENDORIBANDETAIL>
     </urn:ZFM_VEN_DETAIL_SK>
  </soapenv:Body>
</soapenv:Envelope>`;
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_vend_detail_sk&interfaceNamespace=http://vend_portal_sk.com',
    'headers': {
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Content-Type': 'application/xml',
      'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
    },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/vend_go_rec", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_GO_REC_SK>
        <!--You may enter the following 3 items in any order-->
        <VEN_NO>`+uname+`</VEN_NO>
        <!--Optional:-->
        <HEADER_TABLE>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <MAT_DOC></MAT_DOC>
              <!--Optional:-->
              <DOC_YEAR></DOC_YEAR>
              <!--Optional:-->
              <TR_EV_TYPE></TR_EV_TYPE>
              <!--Optional:-->
              <DOC_DATE></DOC_DATE>
              <!--Optional:-->
              <PSTNG_DATE></PSTNG_DATE>
              <!--Optional:-->
              <ENTRY_DATE></ENTRY_DATE>
              <!--Optional:-->
              <ENTRY_TIME></ENTRY_TIME>
              <!--Optional:-->
              <USERNAME></USERNAME>
              <!--Optional:-->
              <VER_GR_GI_SLIP></VER_GR_GI_SLIP>
              <!--Optional:-->
              <EXPIMP_NO></EXPIMP_NO>
              <!--Optional:-->
              <REF_DOC_NO></REF_DOC_NO>
              <!--Optional:-->
              <HEADER_TXT></HEADER_TXT>
              <!--Optional:-->
              <REF_DOC_NO_LONG></REF_DOC_NO_LONG>
           </item>
        </HEADER_TABLE>
        <!--Optional:-->
        <RETURN>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <TYPE></TYPE>
              <!--Optional:-->
              <ID></ID>
              <!--Optional:-->
              <NUMBER></NUMBER>
              <!--Optional:-->
              <MESSAGE></MESSAGE>
              <!--Optional:-->
              <LOG_NO></LOG_NO>
              <!--Optional:-->
              <LOG_MSG_NO></LOG_MSG_NO>
              <!--Optional:-->
              <MESSAGE_V1></MESSAGE_V1>
              <!--Optional:-->
              <MESSAGE_V2></MESSAGE_V2>
              <!--Optional:-->
              <MESSAGE_V3></MESSAGE_V3>
              <!--Optional:-->
              <MESSAGE_V4></MESSAGE_V4>
              <!--Optional:-->
              <PARAMETER></PARAMETER>
              <!--Optional:-->
              <ROW></ROW>
              <!--Optional:-->
              <FIELD></FIELD>
              <!--Optional:-->
              <SYSTEM></SYSTEM>
           </item>
        </RETURN>
     </urn:ZFM_VEN_GO_REC_SK>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_vend_go_rec_sk&interfaceNamespace=http://vend_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/vend_inv", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_INV_SK>
        <!--You may enter the following 3 items in any order-->
        <VEN_NO>`+uname+`</VEN_NO>
        <!--Optional:-->
        <HEADER_TABLE>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <INV_DOC_NO></INV_DOC_NO>
              <!--Optional:-->
              <FISC_YEAR></FISC_YEAR>
              <!--Optional:-->
              <PSTNG_DATE></PSTNG_DATE>
              <!--Optional:-->
              <DOC_DATE></DOC_DATE>
              <!--Optional:-->
              <ENTRY_DATE></ENTRY_DATE>
              <!--Optional:-->
              <ENTRY_TIME></ENTRY_TIME>
              <!--Optional:-->
              <COMP_CODE></COMP_CODE>
              <!--Optional:-->
              <GROSS_AMNT></GROSS_AMNT>
              <!--Optional:-->
              <CURRENCY></CURRENCY>
              <!--Optional:-->
              <CURRENCY_ISO></CURRENCY_ISO>
              <!--Optional:-->
              <DIFF_INV></DIFF_INV>
              <!--Optional:-->
              <REF_DOC_NO></REF_DOC_NO>
              <!--Optional:-->
              <HEADER_TXT></HEADER_TXT>
              <!--Optional:-->
              <PERSON_EXT></PERSON_EXT>
              <!--Optional:-->
              <INVOICE_STATUS></INVOICE_STATUS>
              <!--Optional:-->
              <REF_DOC_NO_LONG></REF_DOC_NO_LONG>
              <!--Optional:-->
              <TM_DOCUMENT></TM_DOCUMENT>
              <!--Optional:-->
              <INV_TRAN_></INV_TRAN_>
           </item>
        </HEADER_TABLE>
        <!--Optional:-->
        <RETURN>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <TYPE></TYPE>
              <!--Optional:-->
              <ID></ID>
              <!--Optional:-->
              <NUMBER></NUMBER>
              <!--Optional:-->
              <MESSAGE></MESSAGE>
              <!--Optional:-->
              <LOG_NO></LOG_NO>
              <!--Optional:-->
              <LOG_MSG_NO></LOG_MSG_NO>
              <!--Optional:-->
              <MESSAGE_V1></MESSAGE_V1>
              <!--Optional:-->
              <MESSAGE_V2></MESSAGE_V2>
              <!--Optional:-->
              <MESSAGE_V3></MESSAGE_V3>
              <!--Optional:-->
              <MESSAGE_V4></MESSAGE_V4>
              <!--Optional:-->
              <PARAMETER></PARAMETER>
              <!--Optional:-->
              <ROW></ROW>
              <!--Optional:-->
              <FIELD></FIELD>
              <!--Optional:-->
              <SYSTEM></SYSTEM>
           </item>
        </RETURN>
     </urn:ZFM_VEN_INV_SK>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_vend_inv_sk&interfaceNamespace=http://vend_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/vendorlogin", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_LOGIN_SARATH>
        <!--You may enter the following 2 items in any order-->
        <PASSWORD>`+pwd+`</PASSWORD>
        <VEN_NO>`+uname+`</VEN_NO>
     </urn:ZFM_VEN_LOGIN_SARATH>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_vend_login_sk&interfaceNamespace=http://vend_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/vend_payage", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_PA_SK>
        <!--You may enter the following 2 items in any order-->
        <VEN_NO>`+uname+`</VEN_NO>
        <!--Optional:-->
        <RESULT>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <COMP_CODE></COMP_CODE>
              <!--Optional:-->
              <VENDOR></VENDOR>
              <!--Optional:-->
              <SP_GL_IND></SP_GL_IND>
              <!--Optional:-->
              <CLEAR_DATE></CLEAR_DATE>
              <!--Optional:-->
              <CLR_DOC_NO></CLR_DOC_NO>
              <!--Optional:-->
              <ALLOC_NMBR></ALLOC_NMBR>
              <!--Optional:-->
              <FISC_YEAR></FISC_YEAR>
              <!--Optional:-->
              <DOC_NO></DOC_NO>
              <!--Optional:-->
              <ITEM_NUM></ITEM_NUM>
              <!--Optional:-->
              <PSTNG_DATE></PSTNG_DATE>
              <!--Optional:-->
              <DOC_DATE></DOC_DATE>
              <!--Optional:-->
              <ENTRY_DATE></ENTRY_DATE>
              <!--Optional:-->
              <CURRENCY></CURRENCY>
              <!--Optional:-->
              <LOC_CURRCY></LOC_CURRCY>
              <!--Optional:-->
              <REF_DOC_NO></REF_DOC_NO>
              <!--Optional:-->
              <DOC_TYPE></DOC_TYPE>
              <!--Optional:-->
              <FIS_PERIOD></FIS_PERIOD>
              <!--Optional:-->
              <POST_KEY></POST_KEY>
              <!--Optional:-->
              <DB_CR_IND></DB_CR_IND>
              <!--Optional:-->
              <BUS_AREA></BUS_AREA>
              <!--Optional:-->
              <TAX_CODE></TAX_CODE>
              <!--Optional:-->
              <LC_AMOUNT></LC_AMOUNT>
              <!--Optional:-->
              <AMT_DOCCUR></AMT_DOCCUR>
              <!--Optional:-->
              <LC_TAX></LC_TAX>
              <!--Optional:-->
              <TX_DOC_CUR></TX_DOC_CUR>
              <!--Optional:-->
              <ITEM_TEXT></ITEM_TEXT>
              <!--Optional:-->
              <BRANCH></BRANCH>
              <!--Optional:-->
              <BLINE_DATE></BLINE_DATE>
              <!--Optional:-->
              <PMNTTRMS></PMNTTRMS>
              <!--Optional:-->
              <DSCT_DAYS1></DSCT_DAYS1>
              <!--Optional:-->
              <DSCT_DAYS2></DSCT_DAYS2>
              <!--Optional:-->
              <NETTERMS></NETTERMS>
              <!--Optional:-->
              <DSCT_PCT1></DSCT_PCT1>
              <!--Optional:-->
              <DSCT_PCT2></DSCT_PCT2>
              <!--Optional:-->
              <DISC_BASE></DISC_BASE>
              <!--Optional:-->
              <DSC_AMT_LC></DSC_AMT_LC>
              <!--Optional:-->
              <DSC_AMT_DC></DSC_AMT_DC>
              <!--Optional:-->
              <PYMT_METH></PYMT_METH>
              <!--Optional:-->
              <PMNT_BLOCK></PMNT_BLOCK>
              <!--Optional:-->
              <FIXEDTERMS></FIXEDTERMS>
              <!--Optional:-->
              <INV_REF></INV_REF>
              <!--Optional:-->
              <INV_YEAR></INV_YEAR>
              <!--Optional:-->
              <INV_ITEM></INV_ITEM>
              <!--Optional:-->
              <DUNN_BLOCK></DUNN_BLOCK>
              <!--Optional:-->
              <DUNN_KEY></DUNN_KEY>
              <!--Optional:-->
              <LAST_DUNN></LAST_DUNN>
              <!--Optional:-->
              <DUNN_LEVEL></DUNN_LEVEL>
              <!--Optional:-->
              <DUNN_AREA></DUNN_AREA>
              <!--Optional:-->
              <W_TAX_CODE></W_TAX_CODE>
              <!--Optional:-->
              <W_TAX_BASE></W_TAX_BASE>
              <!--Optional:-->
              <WI_TAX_AMT></WI_TAX_AMT>
              <!--Optional:-->
              <DOC_STATUS></DOC_STATUS>
              <!--Optional:-->
              <NXT_DOCTYP></NXT_DOCTYP>
              <!--Optional:-->
              <VAT_REG_NO></VAT_REG_NO>
              <!--Optional:-->
              <EXEMPT_NO></EXEMPT_NO>
              <!--Optional:-->
              <W_TAX_EXPT></W_TAX_EXPT>
              <!--Optional:-->
              <REASON_CDE></REASON_CDE>
              <!--Optional:-->
              <PMTMTHSUPL></PMTMTHSUPL>
              <!--Optional:-->
              <REF_KEY_1></REF_KEY_1>
              <!--Optional:-->
              <REF_KEY_2></REF_KEY_2>
              <!--Optional:-->
              <T_CURRENCY></T_CURRENCY>
              <!--Optional:-->
              <AMOUNT></AMOUNT>
              <!--Optional:-->
              <NET_AMOUNT></NET_AMOUNT>
              <!--Optional:-->
              <NAME></NAME>
              <!--Optional:-->
              <NAME_2></NAME_2>
              <!--Optional:-->
              <NAME_3></NAME_3>
              <!--Optional:-->
              <NAME_4></NAME_4>
              <!--Optional:-->
              <POSTL_CODE></POSTL_CODE>
              <!--Optional:-->
              <CITY></CITY>
              <!--Optional:-->
              <COUNTRY></COUNTRY>
              <!--Optional:-->
              <STREET></STREET>
              <!--Optional:-->
              <PO_BOX></PO_BOX>
              <!--Optional:-->
              <POBX_PCD></POBX_PCD>
              <!--Optional:-->
              <POBK_CURAC></POBK_CURAC>
              <!--Optional:-->
              <BANK_ACCT></BANK_ACCT>
              <!--Optional:-->
              <BANK_KEY></BANK_KEY>
              <!--Optional:-->
              <BANK_CTRY></BANK_CTRY>
              <!--Optional:-->
              <TAX_NO_1></TAX_NO_1>
              <!--Optional:-->
              <TAX_NO_2></TAX_NO_2>
              <!--Optional:-->
              <TAX></TAX>
              <!--Optional:-->
              <EQUAL_TAX></EQUAL_TAX>
              <!--Optional:-->
              <REGION></REGION>
              <!--Optional:-->
              <CTRL_KEY></CTRL_KEY>
              <!--Optional:-->
              <INSTR_KEY></INSTR_KEY>
              <!--Optional:-->
              <PAYEE_CODE></PAYEE_CODE>
              <!--Optional:-->
              <LANGU></LANGU>
              <!--Optional:-->
              <BILL_LIFE></BILL_LIFE>
              <!--Optional:-->
              <BE_TAXCODE></BE_TAXCODE>
              <!--Optional:-->
              <BILLTAX_LC></BILLTAX_LC>
              <!--Optional:-->
              <BILLTAX_FC></BILLTAX_FC>
              <!--Optional:-->
              <LC_COL_CHG></LC_COL_CHG>
              <!--Optional:-->
              <COLL_CHARG></COLL_CHARG>
              <!--Optional:-->
              <CHGS_TX_CD></CHGS_TX_CD>
              <!--Optional:-->
              <ISSUE_DATE></ISSUE_DATE>
              <!--Optional:-->
              <USAGEDATE></USAGEDATE>
              <!--Optional:-->
              <BILL_USAGE></BILL_USAGE>
              <!--Optional:-->
              <DOMICILE></DOMICILE>
              <!--Optional:-->
              <DRAWER></DRAWER>
              <!--Optional:-->
              <CTRBNK_LOC></CTRBNK_LOC>
              <!--Optional:-->
              <DRAW_CITY1></DRAW_CITY1>
              <!--Optional:-->
              <DRAWEE></DRAWEE>
              <!--Optional:-->
              <DRAW_CITY2></DRAW_CITY2>
              <!--Optional:-->
              <DISCT_DAYS></DISCT_DAYS>
              <!--Optional:-->
              <DISCT_RATE></DISCT_RATE>
              <!--Optional:-->
              <ACCEPTED></ACCEPTED>
              <!--Optional:-->
              <BILLSTATUS></BILLSTATUS>
              <!--Optional:-->
              <PRTEST_IND></PRTEST_IND>
              <!--Optional:-->
              <BE_DEMAND></BE_DEMAND>
              <!--Optional:-->
              <OBJ_TYPE></OBJ_TYPE>
              <!--Optional:-->
              <REF_DOC></REF_DOC>
              <!--Optional:-->
              <REF_ORG_UN></REF_ORG_UN>
              <!--Optional:-->
              <REVERSAL_DOC></REVERSAL_DOC>
              <!--Optional:-->
              <SP_GL_TYPE></SP_GL_TYPE>
              <!--Optional:-->
              <NEG_POSTNG></NEG_POSTNG>
              <!--Optional:-->
              <REF_DOC_NO_LONG></REF_DOC_NO_LONG>
           </item>
        </RESULT>
     </urn:ZFM_VEN_PA_SK>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_vend_pa_sk&interfaceNamespace=http://vend_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/vend_purorder", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_PO_SK>
        <!--You may enter the following 3 items in any order-->
        <VEN_NO>`+uname+`</VEN_NO>
        <!--Optional:-->
        <HEADER_TABLE>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <PO_NUMBER></PO_NUMBER>
              <!--Optional:-->
              <CO_CODE></CO_CODE>
              <!--Optional:-->
              <DOC_CAT></DOC_CAT>
              <!--Optional:-->
              <DOC_TYPE></DOC_TYPE>
              <!--Optional:-->
              <CNTRL_IND></CNTRL_IND>
              <!--Optional:-->
              <DELETE_IND></DELETE_IND>
              <!--Optional:-->
              <STATUS></STATUS>
              <!--Optional:-->
              <CREATED_ON></CREATED_ON>
              <!--Optional:-->
              <CREATED_BY></CREATED_BY>
              <!--Optional:-->
              <ITEM_INTVL></ITEM_INTVL>
              <!--Optional:-->
              <LAST_ITEM></LAST_ITEM>
              <!--Optional:-->
              <VENDOR></VENDOR>
              <!--Optional:-->
              <LANGUAGE></LANGUAGE>
              <!--Optional:-->
              <PMNTTRMS></PMNTTRMS>
              <!--Optional:-->
              <DSCNT1_TO></DSCNT1_TO>
              <!--Optional:-->
              <DSCNT2_TO></DSCNT2_TO>
              <!--Optional:-->
              <DSCNT3_TO></DSCNT3_TO>
              <!--Optional:-->
              <CASH_DISC1></CASH_DISC1>
              <!--Optional:-->
              <CASH_DISC2></CASH_DISC2>
              <!--Optional:-->
              <PURCH_ORG></PURCH_ORG>
              <!--Optional:-->
              <PUR_GROUP></PUR_GROUP>
              <!--Optional:-->
              <CURRENCY></CURRENCY>
              <!--Optional:-->
              <EXCH_RATE></EXCH_RATE>
              <!--Optional:-->
              <EX_RATE_FX></EX_RATE_FX>
              <!--Optional:-->
              <DOC_DATE></DOC_DATE>
              <!--Optional:-->
              <VPER_START></VPER_START>
              <!--Optional:-->
              <VPER_END></VPER_END>
              <!--Optional:-->
              <APPLIC_BY></APPLIC_BY>
              <!--Optional:-->
              <QUOT_DEAD></QUOT_DEAD>
              <!--Optional:-->
              <BINDG_PER></BINDG_PER>
              <!--Optional:-->
              <WARRANTY></WARRANTY>
              <!--Optional:-->
              <BIDINV_NO></BIDINV_NO>
              <!--Optional:-->
              <QUOTATION></QUOTATION>
              <!--Optional:-->
              <QUOT_DATE></QUOT_DATE>
              <!--Optional:-->
              <REF_1></REF_1>
              <!--Optional:-->
              <SALES_PERS></SALES_PERS>
              <!--Optional:-->
              <TELEPHONE></TELEPHONE>
              <!--Optional:-->
              <SUPPL_VEND></SUPPL_VEND>
              <!--Optional:-->
              <CUSTOMER></CUSTOMER>
              <!--Optional:-->
              <AGREEMENT></AGREEMENT>
              <!--Optional:-->
              <REJ_REASON></REJ_REASON>
              <!--Optional:-->
              <COMPL_DLV></COMPL_DLV>
              <!--Optional:-->
              <GR_MESSAGE></GR_MESSAGE>
              <!--Optional:-->
              <SUPPL_PLNT></SUPPL_PLNT>
              <!--Optional:-->
              <RCVG_VEND></RCVG_VEND>
              <!--Optional:-->
              <INCOTERMS1></INCOTERMS1>
              <!--Optional:-->
              <INCOTERMS2></INCOTERMS2>
              <!--Optional:-->
              <TARGET_VAL></TARGET_VAL>
              <!--Optional:-->
              <COLL_NO></COLL_NO>
              <!--Optional:-->
              <DOC_COND></DOC_COND>
              <!--Optional:-->
              <PROCEDURE></PROCEDURE>
              <!--Optional:-->
              <UPDATE_GRP></UPDATE_GRP>
              <!--Optional:-->
              <DIFF_INV></DIFF_INV>
              <!--Optional:-->
              <EXPORT_NO></EXPORT_NO>
              <!--Optional:-->
              <OUR_REF></OUR_REF>
              <!--Optional:-->
              <LOGSYSTEM></LOGSYSTEM>
              <!--Optional:-->
              <SUBITEMINT></SUBITEMINT>
              <!--Optional:-->
              <MAST_COND></MAST_COND>
              <!--Optional:-->
              <REL_GROUP></REL_GROUP>
              <!--Optional:-->
              <REL_STRAT></REL_STRAT>
              <!--Optional:-->
              <REL_IND></REL_IND>
              <!--Optional:-->
              <REL_STATUS></REL_STATUS>
              <!--Optional:-->
              <SUBJ_TO_R></SUBJ_TO_R>
              <!--Optional:-->
              <TAXR_CNTRY></TAXR_CNTRY>
              <!--Optional:-->
              <SCHED_IND></SCHED_IND>
              <!--Optional:-->
              <VEND_NAME></VEND_NAME>
              <!--Optional:-->
              <CURRENCY_ISO></CURRENCY_ISO>
              <!--Optional:-->
              <EXCH_RATE_CM></EXCH_RATE_CM>
              <!--Optional:-->
              <HOLD></HOLD>
           </item>
        </HEADER_TABLE>
        <!--Optional:-->
        <RETURN>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <TYPE></TYPE>
              <!--Optional:-->
              <CODE></CODE>
              <!--Optional:-->
              <MESSAGE></MESSAGE>
              <!--Optional:-->
              <LOG_NO></LOG_NO>
              <!--Optional:-->
              <LOG_MSG_NO></LOG_MSG_NO>
              <!--Optional:-->
              <MESSAGE_V1></MESSAGE_V1>
              <!--Optional:-->
              <MESSAGE_V2></MESSAGE_V2>
              <!--Optional:-->
              <MESSAGE_V3></MESSAGE_V3>
              <!--Optional:-->
              <MESSAGE_V4></MESSAGE_V4>
           </item>
        </RETURN>
     </urn:ZFM_VEN_PO_SK>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_vend_po_sk&interfaceNamespace=http://vend_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/vend_req_quo", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_REQ_QUO_SK>
        <!--You may enter the following 2 items in any order-->
        <VEN_NO>5</VEN_NO>
        <!--Optional:-->
        <RESULT>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <MANDT></MANDT>
              <!--Optional:-->
              <EBELN></EBELN>
              <!--Optional:-->
              <BUKRS></BUKRS>
              <!--Optional:-->
              <BSTYP></BSTYP>
              <!--Optional:-->
              <BSART></BSART>
              <!--Optional:-->
              <BSAKZ></BSAKZ>
              <!--Optional:-->
              <LOEKZ></LOEKZ>
              <!--Optional:-->
              <STATU></STATU>
              <!--Optional:-->
              <AEDAT></AEDAT>
              <!--Optional:-->
              <ERNAM></ERNAM>
              <!--Optional:-->
              <PINCR></PINCR>
              <!--Optional:-->
              <LPONR></LPONR>
              <!--Optional:-->
              <LIFNR></LIFNR>
              <!--Optional:-->
              <SPRAS></SPRAS>
              <!--Optional:-->
              <ZTERM></ZTERM>
              <!--Optional:-->
              <ZBD1T></ZBD1T>
              <!--Optional:-->
              <ZBD2T></ZBD2T>
              <!--Optional:-->
              <ZBD3T></ZBD3T>
              <!--Optional:-->
              <ZBD1P></ZBD1P>
              <!--Optional:-->
              <ZBD2P></ZBD2P>
              <!--Optional:-->
              <EKORG></EKORG>
              <!--Optional:-->
              <EKGRP></EKGRP>
              <!--Optional:-->
              <WAERS></WAERS>
              <!--Optional:-->
              <WKURS></WKURS>
              <!--Optional:-->
              <KUFIX></KUFIX>
              <!--Optional:-->
              <BEDAT></BEDAT>
              <!--Optional:-->
              <KDATB></KDATB>
              <!--Optional:-->
              <KDATE></KDATE>
              <!--Optional:-->
              <BWBDT></BWBDT>
              <!--Optional:-->
              <ANGDT></ANGDT>
              <!--Optional:-->
              <BNDDT></BNDDT>
              <!--Optional:-->
              <GWLDT></GWLDT>
              <!--Optional:-->
              <AUSNR></AUSNR>
              <!--Optional:-->
              <ANGNR></ANGNR>
              <!--Optional:-->
              <IHRAN></IHRAN>
              <!--Optional:-->
              <IHREZ></IHREZ>
              <!--Optional:-->
              <VERKF></VERKF>
              <!--Optional:-->
              <TELF1></TELF1>
              <!--Optional:-->
              <LLIEF></LLIEF>
              <!--Optional:-->
              <KUNNR></KUNNR>
              <!--Optional:-->
              <KONNR></KONNR>
              <!--Optional:-->
              <ABGRU></ABGRU>
              <!--Optional:-->
              <AUTLF></AUTLF>
              <!--Optional:-->
              <WEAKT></WEAKT>
              <!--Optional:-->
              <RESWK></RESWK>
              <!--Optional:-->
              <LBLIF></LBLIF>
              <!--Optional:-->
              <INCO1></INCO1>
              <!--Optional:-->
              <INCO2></INCO2>
              <!--Optional:-->
              <KTWRT></KTWRT>
              <!--Optional:-->
              <SUBMI></SUBMI>
              <!--Optional:-->
              <KNUMV></KNUMV>
              <!--Optional:-->
              <KALSM></KALSM>
              <!--Optional:-->
              <STAFO></STAFO>
              <!--Optional:-->
              <LIFRE></LIFRE>
              <!--Optional:-->
              <EXNUM></EXNUM>
              <!--Optional:-->
              <UNSEZ></UNSEZ>
              <!--Optional:-->
              <LOGSY></LOGSY>
              <!--Optional:-->
              <UPINC></UPINC>
              <!--Optional:-->
              <STAKO></STAKO>
              <!--Optional:-->
              <FRGGR></FRGGR>
              <!--Optional:-->
              <FRGSX></FRGSX>
              <!--Optional:-->
              <FRGKE></FRGKE>
              <!--Optional:-->
              <FRGZU></FRGZU>
              <!--Optional:-->
              <FRGRL></FRGRL>
              <!--Optional:-->
              <LANDS></LANDS>
              <!--Optional:-->
              <LPHIS></LPHIS>
              <!--Optional:-->
              <ADRNR></ADRNR>
              <!--Optional:-->
              <STCEG_L></STCEG_L>
              <!--Optional:-->
              <STCEG></STCEG>
              <!--Optional:-->
              <ABSGR></ABSGR>
              <!--Optional:-->
              <ADDNR></ADDNR>
              <!--Optional:-->
              <KORNR></KORNR>
              <!--Optional:-->
              <MEMORY></MEMORY>
              <!--Optional:-->
              <PROCSTAT></PROCSTAT>
              <!--Optional:-->
              <RLWRT></RLWRT>
              <!--Optional:-->
              <REVNO></REVNO>
              <!--Optional:-->
              <SCMPROC></SCMPROC>
              <!--Optional:-->
              <REASON_CODE></REASON_CODE>
              <!--Optional:-->
              <MEMORYTYPE></MEMORYTYPE>
              <!--Optional:-->
              <RETTP></RETTP>
              <!--Optional:-->
              <RETPC></RETPC>
              <!--Optional:-->
              <DPTYP></DPTYP>
              <!--Optional:-->
              <DPPCT></DPPCT>
              <!--Optional:-->
              <DPAMT></DPAMT>
              <!--Optional:-->
              <DPDAT></DPDAT>
              <!--Optional:-->
              <MSR_ID></MSR_ID>
              <!--Optional:-->
              <HIERARCHY_EXISTS></HIERARCHY_EXISTS>
              <!--Optional:-->
              <THRESHOLD_EXISTS></THRESHOLD_EXISTS>
              <!--Optional:-->
              <LEGAL_CONTRACT></LEGAL_CONTRACT>
              <!--Optional:-->
              <DESCRIPTION></DESCRIPTION>
              <!--Optional:-->
              <RELEASE_DATE></RELEASE_DATE>
              <!--Optional:-->
              <VSART></VSART>
              <!--Optional:-->
              <HANDOVERLOC></HANDOVERLOC>
              <!--Optional:-->
              <SHIPCOND></SHIPCOND>
              <!--Optional:-->
              <INCOV></INCOV>
              <!--Optional:-->
              <INCO2_L></INCO2_L>
              <!--Optional:-->
              <INCO3_L></INCO3_L>
              <!--Optional:-->
              <FORCE_ID></FORCE_ID>
              <!--Optional:-->
              <FORCE_CNT></FORCE_CNT>
              <!--Optional:-->
              <RELOC_ID></RELOC_ID>
              <!--Optional:-->
              <RELOC_SEQ_ID></RELOC_SEQ_ID>
              <!--Optional:-->
              <SOURCE_LOGSYS></SOURCE_LOGSYS>
              <!--Optional:-->
              <FSH_TRANSACTION></FSH_TRANSACTION>
              <!--Optional:-->
              <FSH_ITEM_GROUP></FSH_ITEM_GROUP>
              <!--Optional:-->
              <FSH_VAS_LAST_ITEM></FSH_VAS_LAST_ITEM>
              <!--Optional:-->
              <FSH_OS_STG_CHANGE></FSH_OS_STG_CHANGE>
              <!--Optional:-->
              <VZSKZ></VZSKZ>
              <!--Optional:-->
              <FSH_SNST_STATUS></FSH_SNST_STATUS>
              <!--Optional:-->
              <POHF_TYPE></POHF_TYPE>
              <!--Optional:-->
              <EQ_EINDT></EQ_EINDT>
              <!--Optional:-->
              <EQ_WERKS></EQ_WERKS>
              <!--Optional:-->
              <FIXPO></FIXPO>
              <!--Optional:-->
              <EKGRP_ALLOW></EKGRP_ALLOW>
              <!--Optional:-->
              <WERKS_ALLOW></WERKS_ALLOW>
              <!--Optional:-->
              <CONTRACT_ALLOW></CONTRACT_ALLOW>
              <!--Optional:-->
              <PSTYP_ALLOW></PSTYP_ALLOW>
              <!--Optional:-->
              <FIXPO_ALLOW></FIXPO_ALLOW>
              <!--Optional:-->
              <KEY_ID_ALLOW></KEY_ID_ALLOW>
              <!--Optional:-->
              <AUREL_ALLOW></AUREL_ALLOW>
              <!--Optional:-->
              <DELPER_ALLOW></DELPER_ALLOW>
              <!--Optional:-->
              <EINDT_ALLOW></EINDT_ALLOW>
              <!--Optional:-->
              <LTSNR_ALLOW></LTSNR_ALLOW>
              <!--Optional:-->
              <OTB_LEVEL></OTB_LEVEL>
              <!--Optional:-->
              <OTB_COND_TYPE></OTB_COND_TYPE>
              <!--Optional:-->
              <KEY_ID></KEY_ID>
              <!--Optional:-->
              <OTB_VALUE></OTB_VALUE>
              <!--Optional:-->
              <OTB_CURR></OTB_CURR>
              <!--Optional:-->
              <OTB_RES_VALUE></OTB_RES_VALUE>
              <!--Optional:-->
              <OTB_SPEC_VALUE></OTB_SPEC_VALUE>
              <!--Optional:-->
              <SPR_RSN_PROFILE></SPR_RSN_PROFILE>
              <!--Optional:-->
              <BUDG_TYPE></BUDG_TYPE>
              <!--Optional:-->
              <OTB_STATUS></OTB_STATUS>
              <!--Optional:-->
              <OTB_REASON></OTB_REASON>
              <!--Optional:-->
              <CHECK_TYPE></CHECK_TYPE>
              <!--Optional:-->
              <CON_OTB_REQ></CON_OTB_REQ>
              <!--Optional:-->
              <CON_PREBOOK_LEV></CON_PREBOOK_LEV>
              <!--Optional:-->
              <CON_DISTR_LEV></CON_DISTR_LEV>
              <!--Optional:-->
              <CURR_DATE></CURR_DATE>
           </item>
        </RESULT>
     </urn:ZFM_VEN_REQ_QUO_SK>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_vend_req_quo_sk&interfaceNamespace=http://vend_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/emplogin", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SK_EMP_LOGIN>
        <!--You may enter the following 2 items in any order-->
        <EMP_NO>`+uname+`</EMP_NO>
        <PASSWORD>`+pwd+`</PASSWORD>
     </urn:ZFM_SK_EMP_LOGIN>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_emp_login_sk&interfaceNamespace=http://emp_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/emp_profile", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SK_EMP_LOGIN_DET>
        <EMP_NO>`+uname+`</EMP_NO>
     </urn:ZFM_SK_EMP_LOGIN_DET>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_emp_detail_sk&interfaceNamespace=http://emp_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/emp_payroll", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SK_EMP_PAYROLL>
        <!--You may enter the following 2 items in any order-->
        <EMP_NO>`+uname+`</EMP_NO>
        <!--Optional:-->
        <RESULT>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <SEQUENCENUMBER></SEQUENCENUMBER>
              <!--Optional:-->
              <FPPERIOD></FPPERIOD>
              <!--Optional:-->
              <FPBEGIN></FPBEGIN>
              <!--Optional:-->
              <FPEND></FPEND>
              <!--Optional:-->
              <BONUSDATE></BONUSDATE>
              <!--Optional:-->
              <PAYDATE></PAYDATE>
              <!--Optional:-->
              <PAYTYPE></PAYTYPE>
              <!--Optional:-->
              <PAYID></PAYID>
              <!--Optional:-->
              <OCREASON></OCREASON>
              <!--Optional:-->
              <PAYTYPE_TEXT></PAYTYPE_TEXT>
              <!--Optional:-->
              <OCREASON_TEXT></OCREASON_TEXT>
           </item>
        </RESULT>
     </urn:ZFM_SK_EMP_PAYROLL>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_emp_payroll_sk&interfaceNamespace=http://emp_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/employee_payslip", function (req, res) {
  uname_employee = req.body.uname_employee;
  Seq_No= req.body.Seq_No;
  Payroll_Period= req.body.Payroll_Period;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SK_EMP_PAYSLIP>
        <!--You may enter the following 3 items in any order-->
        <EMP_NO>`+uname_employee+`</EMP_NO>
        <PAYSLIPVARIENT>`+Payroll_Period+`</PAYSLIPVARIENT>
        <SEQ_NO>`+Seq_No+`</SEQ_NO>
     </urn:ZFM_SK_EMP_PAYSLIP>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_emp_payslip_sk&interfaceNamespace=http://emp_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/emp_leave", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SK_LEAVE_REQ>
        <!--You may enter the following 2 items in any order-->
        <EMP_NO>`+uname+`</EMP_NO>
        <!--Optional:-->
        <RESULT>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <EMPLOYEENO></EMPLOYEENO>
              <!--Optional:-->
              <SUBTYPE></SUBTYPE>
              <!--Optional:-->
              <OBJECTID></OBJECTID>
              <!--Optional:-->
              <LOCKINDIC></LOCKINDIC>
              <!--Optional:-->
              <VALIDEND></VALIDEND>
              <!--Optional:-->
              <VALIDBEGIN></VALIDBEGIN>
              <!--Optional:-->
              <RECORDNR></RECORDNR>
              <!--Optional:-->
              <START></START>
              <!--Optional:-->
              <END></END>
              <!--Optional:-->
              <ABSENCETYPE></ABSENCETYPE>
              <!--Optional:-->
              <NAMEOFABSENCETYPE></NAMEOFABSENCETYPE>
              <!--Optional:-->
              <ABSENCEDAYS></ABSENCEDAYS>
              <!--Optional:-->
              <ABSENCEHOURS></ABSENCEHOURS>
           </item>
        </RESULT>
     </urn:ZFM_SK_LEAVE_REQ>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PORTAL_SK&receiverParty=&receiverService=&interface=si_emp_leave_sk&interfaceNamespace=http://emp_portal_sk.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy'
  },
body:postData
};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.listen(4000, () => {
  console.log("server has started");
});
