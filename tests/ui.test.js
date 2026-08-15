const test=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');
const html=fs.readFileSync('index.html','utf8'),wire=fs.readFileSync('platforms.html','utf8'),js=fs.readFileSync('app.js','utf8');
test('servicer and customer dashboards exist',()=>{assert.match(html,/data-view="servicer"/);assert.match(html,/data-view="customer"/)});
test('reward names are canonical',()=>{for(const token of ['DISC','VISC','AMDX'])assert.match(html,new RegExp(token));assert.doesNotMatch(html,/data-token="DIS"|data-token="AMX"/)});
test('fair reciprocal QR language is present',()=>{assert.match(html,/positive or negative/);assert.match(js,/regardless of sentiment/);assert.match(js,/CUSTOMER REVIEW REQUEST/)});
test('complaints do not immediately affect standing',()=>assert.match(html,/does not immediately change/));
test('wireframe board links to interactive prototype',()=>{assert.match(wire,/index.html/);assert.match(wire,/device-grid/)});
