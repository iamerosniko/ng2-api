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
                await Request.Content.ReadAsMultipartAsync(provider);
                //Request.Content.ReadAsByteArrayAsync(provider);
                //var bodyStream = new StreamReader(HttpContext.Current.Request.InputStream);
                //bodyStream.BaseStream.Seek(0, SeekOrigin.Begin);
                //var bodyText = bodyStream.ReadToEnd();
                


                // This illustrates how to get the file names.
                foreach (MultipartFileData file in provider.FileData)
                {
                    Trace.WriteLine(file.Headers.ContentDisposition.FileName);
                    Trace.WriteLine("Server file path: " + file.LocalFileName);
                    //Trace.WriteLine(file.Headers);
                    //Trace.WriteLine(root + @"\" + file.Headers.ContentDisposition.FileName.Trim('\"'));
                    rawFileName = file.Headers.ContentDisposition.FileName.Trim('\"');
                    rawDest =root + @"\" + rawFileName;
                    if (File.Exists(rawDest))
                        System.IO.File.Delete(rawDest); 
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
