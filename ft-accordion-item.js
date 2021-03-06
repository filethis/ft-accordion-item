/*
Copyright 2018 FileThis, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@filethis/ft-labeled-icon-button/ft-labeled-icon-button.js';

import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/polymer/polymer-legacy.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
        <style include="iron-flex iron-flex-alignment iron-positioning"></style>

        <style>
            :host {
                display: block;
                overflow: hidden;
                @apply --layout-vertical;
            }
        </style>

        <style>
            .verticalText
            {
                display: block;
                -webkit-transform: rotate(-90deg);
                -moz-transform: rotate(-90deg);
                -ms-transform: rotate(-90deg);
                -o-transform: rotate(-90deg);
            }
        </style>

        <iron-pages id="openOrClosed" class="flex layout vertical" attr-for-selected="name" selected="[[_pageName]]">

            <!-- Open -->
            <div class="flex layout vertical" name="open">

                <!-- Header-->
                <div class="layout horizontal center" style="height:60px; border-bottom: 1px solid #DDD; padding-left: 20px; padding-right: 10px; ">

                    <!-- Heading -->
                    <div style="font-family:Arial; font-size: 16pt; ">
                        [[heading]]
                    </div>

                    <!-- Spacer -->
                    <div class="flex"></div>

                    <!-- Spacer -->
                    <div style="width:15px;"></div>

                    <!-- Hide button -->
                    <ft-labeled-icon-button id="hideButton" icon="arrow-back" label="Hide" on-tap="_onShowOrHideButtonClicked">
                    </ft-labeled-icon-button>

                </div>

                <!-- Content -->
                <slot name="content">
                </slot>

            </div>

            <!-- Closed -->
            <div class="flex layout vertical center" name="closed">

                <div class="layout horizontal center" style="height:55px; padding-left: 5px; padding-right: 5px; ">

                    <!-- Show button -->
                    <ft-labeled-icon-button id="showButton" icon="arrow-forward" label="Show" on-tap="_onShowOrHideButtonClicked">
                    </ft-labeled-icon-button>

                </div>

                <!-- Heading -->
                <div class="flex" style="width:20px; padding-top: 58px; ">
                    <span class="verticalText" style="font-family:Arial; font-size: 16pt; ">
                        [[heading]]
                    </span>
                </div>
            </div>
        </iron-pages>
`,

  is: 'ft-accordion-item',

  properties:
  {
      heading:
      {
          type: String,
          notify: true,
          value: "Untitled"
      },

      isOpen:
      {
          type: Object,
          notify: true,
          value: true,
          observer: "_isOpenChanged"
      },

      _pageName:
      {
          type: String,
          notify: true,
          value: "open"
      }
  },

  _isOpenChanged: function()
  {
      if (this.isOpen)
          this._pageName = "open";
      else
          this._pageName = "closed";
  },

  _onShowOrHideButtonClicked: function()
  {
      this.isOpen = !this.isOpen;
  }
})
