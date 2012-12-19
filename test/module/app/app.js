describe("appURLToPath", function () {
    var appURLPath;

    beforeEach(function () {
        appURLPath = Ti.App.appURLToPath("app://index.html");
    });

    it("return a valid absolute file path for an app URL", function () {
        var file = Ti.Filesystem.getFile(appURLPath);
        expect(file.exists()).toBe(true);
    });

    it("returns a valid path even if the URL has a host in it", function () {
        // See Lighthouse ticket #90 for more details.
        var appURLWithHost = Ti.UI.getCurrentWindow().getURL(),
            appURLPathWithHost = Ti.App.appURLToPath(appURLWithHost);
        expect(appURLPathWithHost).toEqual(appURLPath);
    });
});

// TODO: implement a test for the exit() function.
xdescribe("exit", function () {});

describe("getArguments", function () {
    it("should return two arguments", function () {
        expect(Ti.App.getArguments().length).toBe(2);
    });
});

describe("getCopyright", function () {
    it("returns the copyright specified in the tiapp.xml file", function () {
        expect(Ti.App.getCopyright()).toEqual("2010 by Appcelerator");
    });
});

describe("getDescription", function () {
    it("returns the description specified in the tiapp.xml file", function () {
        expect(Ti.App.getDescription()).toEqual("A testing harness for Ti");
    });
});

describe("getGUID", function () {
    it("returns the application's GUID", function () {
        expect(Ti.App.getGUID()).toEqual("5FDFCB8A-CD45-423F-BF0C-01B025A07D34");
    });
});

describe("getHome", function () {
    var appHomeDir;

    beforeEach(function () {
        appHomeDir = Ti.Filesystem.getFile(Ti.App.getHome());
    });

    it("provides the application home directory", function () {
        expect(appHomeDir.exists()).toBe(true);
    });

    it("should contain the resources folder", function () {
        expect(appHomeDir.resolve("Resources").exists()).toBe(true);
    });
});

// TODO: implement test for getIcon()
xdescribe("getIcon", function () {});

describe("getName", function () {
    it("returns the name of the application", function () {
        expect(Ti.App.getName()).toEqual("Drillbit");
    });
});

describe("getPath", function () {
    it("returns an absolute path to the application's executable", function () {
        var appPath = Ti.App.getPath();
        expect(Ti.Filesystem.getFile(appPath).exists()).toBe(true);
    });
});

describe("getPublisher", function () {
    it("returns the name of the publisher of this application", function () {
        expect(Ti.App.getPublisher()).toEqual("Appcelerator");
    });
});

describe("getApplication", function () {
    it("returns the URL of this application", function () {
        expect(Ti.App.getURL()).toEqual("appcelerator.com");
    });
});

describe("getVersion", function () {
    it("returns the version of the application", function () {
        expect(Ti.App.getVersion()).toEqual("1.0");
    });
});
