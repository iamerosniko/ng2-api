using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;
using System.IO;
using System.Net.Http.Headers;

namespace ng2_api.Controllers
{
    public class UploadController : ApiController
    {
        // GET api/upload
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/upload/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/upload
        public async Task<HttpResponseMessage> PostFormData()
        {
            string rawFileName,rawDest;
            // Check if the request contains multipart/form-data.
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            string root = HttpContext.Current.Server.MapPath("~/upload");
            var provider = new MultipartFormDataStreamProvider(root);
            
            try
            {
                // Read the form data.
                // this temporarily saved and renamed the file as GUID based format.
                await Request.Content.ReadAsMultipartAsync(provider);

                foreach (MultipartFileData file in provider.FileData)
                {
                    //for tracing of files only
                    //Trace.WriteLine(file.Headers.ContentDisposition.FileName);
                    //Trace.WriteLine("Server file path: " + file.LocalFileName);

                    //this gets the original name of the uploaded file
                    rawFileName = file.Headers.ContentDisposition.FileName.Trim('\"');

                    //this concatenates the path of upload folder and original filename
                    rawDest =root + @"\" + rawFileName;

                    //deletes the file if it is existing to upload folder
                    if (File.Exists(rawDest))
                        System.IO.File.Delete(rawDest); 
                    //renames the temporary GUID name to original name and format
                    System.IO.File.Move(file.LocalFileName, rawDest);
                }
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (System.Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }
        //public void Post()
        //{
        //    Debug.Print("hello");
        //    var request = HttpContext.Current.Request;
        //    HttpResponseMessage result = null;
            
        //}

        // PUT api/upload/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/upload/5
        public void Delete(int id)
        {
        }
    }
}
