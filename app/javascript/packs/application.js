// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import 'bootstrap'
import "../stylesheets/application"
import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "controllers"
import "../utils/input_field_formatter"
import $ from 'jquery';
import debounced from 'debounced'
debounced.initialize()

Rails.start()
ActiveStorage.start()

global.$ = $;
global.jQuery = $;
