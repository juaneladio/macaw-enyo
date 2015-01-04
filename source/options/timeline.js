/*
	Copyright (c) 2010, Micah N Gorrell
	All rights reserved.

	THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED
	WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
	MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
	EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
	OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
	WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
	OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
	ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
enyo.kind({

name:												"optionsTimeline",
kind:												"optionsmenu",
classes:											"timeline",

events: {
	onCloseToaster:									"",
	onOpenToaster:									""
},

components: [
	{
		kind:										enyo.Scroller,
		name:										"scroller",

		components: [
			{
				name:								"panel",
				classes:							"panel",
				data: {
					items: [
						{
							label:					$L("Avatar"),
							key:					"avatarType",

							options: [
								{ label: $L("Square"),	value: "square"	},
								{ label: $L("Round"),	value: "round"	},
								{ label: $L("None"),	value: "none"	}
							]
						},
						{
							label:					$L("Name"),
							key:					"showUserName",

							onContent:				"Show",
							offContent:				"Hide"
						},
						{
							label:					$L("Handle"),
							key:					"showScreenName",

							onContent:				"Show",
							offContent:				"Hide"
						},
						{
							label:					$L("Client Name"),
							key:					"showVia",

							onContent:				"Show",
							offContent:				"Hide"
						},
						{
							label:					$L("Time"),
							key:					"showTime",

							options: [
								{ label: $L("Relative"),value: "relative"	},
								{ label: $L("Absolute"),value: "absolute"	},
								{ label: $L("Hidden"),	value: "hidden"		}
							]
						}
					]
				}
			}
		]
	}
],

rendered: function()
{
	this.inherited(arguments);
	this.resizeHandler();
},

resizeHandler: function(sender, event)
{
	this.inherited(arguments);

	/* Fix the scroller height */
	this.$.scroller.applyStyle('max-height',
						(document.body.clientHeight - 34) + 'px');
}

});
